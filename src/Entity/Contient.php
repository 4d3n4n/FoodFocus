<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: "App\Repository\ContientRepository")]
#[ORM\Table(name: "contient")]

class Contient {
    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: "SuiviQuotidien")]
    #[ORM\JoinColumn(name: "id_suivi", referencedColumnName: "id_suivi")]
    private $suiviQuotidien;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: "Produit")]
    #[ORM\JoinColumn(name: "id_produit", referencedColumnName: "id_produit")]
    private $produit;

    #[ORM\Column(type: "integer")]
    private $quantite;


    public function getSuiviQuotidien(): SuiviQuotidien {
        return $this->suiviQuotidien;
    }

    public function getProduit(): Produit {
        return $this->produit;
    }

    public function getQuantite(): int {
        return $this->quantite;
    }
}
