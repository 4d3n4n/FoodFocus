<?php
// src/Service/ProductService.php

namespace App\Repository;

use GuzzleHttp\Client;

class ProductService {
    
    public function fetchFromExternalAPI(string $searchTerm): array
    {
        $client = new Client();
        try {
            $response = $client->request('GET', "https://world.openfoodfacts.org/cgi/search.pl", [
                'query' => [
                    'search_terms' => $searchTerm,
                    'search_simple' => 1,
                    'action' => 'process',
                    'page_size' => 30,
                    'json' => 1,
                ]
            ]);
    
            $content = json_decode($response->getBody()->getContents(), true);
            $products = [];
            $productNames = [];
    
            foreach ($content['products'] as $product) {
                $productNameLower = strtolower($product['product_name']);

                if (empty($product['product_name']) ||
                    empty($product['nutriments']['energy-kcal']) ||
                    empty($product['food_groups']) ||
                    empty($product['nutriments']['proteins']) ||
                    empty($product['nutriments']['fat']) ||
                    empty($product['nutriments']['carbohydrates']) ||
                    in_array($productNameLower, $productNames)) { // Vérifier si le nom du produit existe déjà affiché
                    continue;
                }
    
                $products[] = [
                    'productName' => $product['product_name'],
                    'energyKcal' => $product['nutriments']['energy-kcal'],
                    'foodGroups' => $product['food_groups'],
                    'proteins' => $product['nutriments']['proteins'],
                    'fat' => $product['nutriments']['fat'],
                    'carbohydrates' => $product['nutriments']['carbohydrates'],
                ];
    
                $productNames[] = $productNameLower;
    
                if (count($products) >= 6) { // Arrêt de la boucle une fois que le nombre de produits requis est atteint
                    break;
                }
            }
    
            return $products;
        } catch (\Exception $e) {
            // $this->addFlash('error', 'Erreur lors de la récupération des données: ' . $e->getMessage());
            // Remplacer la ligne ci-dessus avec un mécanisme de logging
            return [];
        }
    }
}
