<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UtilisateurController extends AbstractController
{
    /**
     * @Route("/utilisateur", name="app_utilisateur_dashboard")
     */
    public function index()
    {
        // Récupérer l'utilisateur connecté
        $utilisateur = $this->getUser();

        // Passer l'utilisateur à la vue
        return $this->render('dashboard/dashboard.html.twig', [
            'utilisateur' => $utilisateur,
        ]);
    }
}

