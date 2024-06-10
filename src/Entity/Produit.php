<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: "App\Repository\ProduitRepository")]
#[ORM\Table(name: "produit")]

class Produit {
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: "AUTO")]
    #[ORM\Column(type: "integer")]
    private $idProduit;

    #[ORM\ManyToOne(targetEntity: "SuiviQuotidien")]
    #[ORM\JoinColumn(name: "id_suivi", referencedColumnName: "id_suivi")]
    private $suivi;

    #[ORM\Column(type: "date")]
    private $dateAjout;

    #[ORM\Column(type: "string", length: 50)]
    private $libelleProduit;

    #[ORM\Column(type: "string", length: 30)]
    private $typeProduit;

    #[ORM\Column(type: "integer")]
    private $proteines;

    #[ORM\Column(type: "integer")]
    private $glucides;

    #[ORM\Column(type: "integer")]
    private $lipides;

    #[ORM\Column(type: "integer")]
    private $caloriesProduit;

    #[ORM\Column(type: "integer")]
    private $grammageProduit;


    public function getIdProduit(): int {
        return $this->idProduit;
    }

    public function getSuivi(): SuiviQuotidien {
        return $this->suivi;
    }

    public function getDateAjout(): \DateTime {
        return $this->dateAjout;
    }
    public function setDateAjout(\DateTime $dateAjout) {
        $this->dateAjout = $dateAjout;
    }

    public function getLibelleProduit(): string {
        return $this->libelleProduit;
    }
    public function setLibelleProduit(string $libelleProduit) {
        $this->libelleProduit = $libelleProduit;
    }

    public function getTypeProduit(): string {
        return $this->typeProduit;
    }
    public function setTypeProduit(string $typeProduit) {
        $this->typeProduit = $typeProduit;
    }

    public function getProteines(): int {
        return $this->proteines;
    }
    public function setProteines(int $proteines) {
        $this->proteines = $proteines;
    }

    public function getGlucides(): int {
        return $this->glucides;
    }
    public function setGlucides(int $glucides) {
        $this->glucides = $glucides;
    }

    public function getLipides(): int {
        return $this->lipides;
    }
    public function setLipides(int $lipides) {
        $this->lipides = $lipides;
    }

    public function getCaloriesProduit(): int {
        return $this->caloriesProduit;
    }
    public function setCaloriesProduit(int $caloriesProduit) {
        $this->caloriesProduit = $caloriesProduit;
    }

    public function getGrammageProduit(): int {
        return $this->grammageProduit;
    }

    public function setGrammageProduit(int $grammageProduit) {
        $this->grammageProduit = $grammageProduit;
    }
}
