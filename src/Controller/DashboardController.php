<?php

// src/Controller/DashboardController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use App\Repository\ProductService;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\SuiviQuotidienRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProduitRepository; 
use App\Entity\Produit;
use App\Entity\SuiviQuotidien;


class DashboardController extends AbstractController
{

    public function __construct(private ProductService $productService) {
        $this->productService = $productService;
    }


    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(Request $request, SuiviQuotidienRepository $suiviQuotidienRepository, ProduitRepository $produitRepository, EntityManagerInterface $entityManager): Response {
        $user = $this->getUser();

        if (!$user) {
            return $this->redirectToRoute('app_homepage');
        }

        // Récupérer les données du dernier suivi quotidien de l'utilisateur
        $dernierPoids = $suiviQuotidienRepository->findDernierPoidsParUtilisateur($user->getIdUtilisateur());
        $caloriesCalculees = $suiviQuotidienRepository->findCaloriesCalculeesParUtilisateur($user->getIdUtilisateur());

        // Récupérer la date d'aujourd'hui
        $dateAujourdhui = new \DateTime();
        $dateAujourdhuiFormatted = $dateAujourdhui->format('Y-m-d');


        // Récupérer les produits ajoutés aujourd'hui
        $idSuivi = $entityManager->getRepository(SuiviQuotidien::class)
                    ->findDernierSuiviParUtilisateur($user->getIdUtilisateur())
                    ->getIdSuivi();
        $nouveauxProduits = $entityManager->getRepository(Produit::class)
                            ->findProduitsAjoutesParSuivi($idSuivi, $dateAujourdhuiFormatted);

        // Calculer la somme des protéines, des glucides et des lipides des produits ajoutés aujourd'hui
        $productsArray = [];
        $sumProteines = $sumGlucides = $sumLipides = $caloriesConsommees = 0;
        foreach ($nouveauxProduits as $produit) {
            $sumProteines += $produit->getProteines();
            $sumGlucides += $produit->getGlucides();
            $sumLipides += $produit->getLipides();
            $caloriesConsommees += $produit->getCaloriesProduit();
            $productsArray[] = [
                'id' => $produit->getIdProduit(),
                'libelleProduit' => $produit->getLibelleProduit(),
                'typeProduit' => $produit->getTypeProduit(),
                'caloriesProduit' => $produit->getCaloriesProduit(),
                'grammageProduit' => $produit->getGrammageProduit(),
            ];
        }

        $caloriesRestantes = $caloriesCalculees - $caloriesConsommees;


        $form = $this->createFormBuilder(null)
            ->add('searchTerm', SearchType::class, [
                'label' => false,
                'attr' => ['class' => 'auto-type', 'id' => 'search', 'placeholder' => 'Search...']
            ])
            ->getForm();

        $form->handleRequest($request);
        $products = [];

        if ($form->isSubmitted() && $form->isValid()) {
            $searchTerm = $form->getData()['searchTerm'] ?? '';
            $products = $this->productService->fetchFromExternalAPI($searchTerm);
        }

        return $this->render('dashboard/dashboard.html.twig', [
            'user' => $user,
            'dernierPoids' => $dernierPoids ? $dernierPoids->getPoidsDuJour() : null,
            'caloriesCalculees' => $caloriesCalculees,
            'caloriesConsommees' => $caloriesConsommees,
            'caloriesRestantes' => $caloriesRestantes,
            'nouveauxProduits' => $nouveauxProduits,
            'sumProteines' => $sumProteines,
            'sumGlucides' => $sumGlucides,
            'sumLipides' => $sumLipides,
            'search_form' => $form->createView(),
            'products' => $products ?? [],
            'productsArray' => $productsArray,
        ]);
    }


    #[Route('/ajax-search', name: 'ajax_search', methods: ['POST'])]
    public function ajaxSearch(Request $request): JsonResponse {
        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {
            $jsonData = json_decode($request->getContent(), true);
            $searchTerm = $jsonData['searchTerm'] ?? '';
    
            // Votre logique pour interroger l'API externe
            $products = $this->productService->fetchFromExternalAPI($searchTerm);
    
            return $this->json(['products' => $products]);
        }
    
        throw $this->createNotFoundException('Cette route ne peut être accédée que via AJAX');
    }
}