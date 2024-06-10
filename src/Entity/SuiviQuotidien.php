<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: "App\Repository\SuiviQuotidienRepository")]
#[ORM\Table(name: "suivi_quotidien")]

class SuiviQuotidien {
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: "AUTO")]
    #[ORM\Column(type: "integer")]
    private $idSuivi;

    #[ORM\ManyToOne(targetEntity: "Utilisateur")]
    #[ORM\JoinColumn(name: "id_utilisateur", referencedColumnName: "id_utilisateur")]
    private $utilisateur;

    #[ORM\Column(type: "date")]
    private $date;

    #[ORM\Column(type: "integer")]
    private $caloriesCalculees;

    #[ORM\Column(type: "integer")]
    private $poidsDuJour;



    public function getIdSuivi(): int {
        return $this->idSuivi;
    }

    public function getUtilisateur(): Utilisateur {
        return $this->utilisateur;
    }

    public function getDate(): \DateTime {
        return $this->date;
    }
    public function setDate(\DateTime $date) {
        $this->date = $date;
    }

    public function getCaloriesCalculees(): int {
        return $this->caloriesCalculees;
    }
    public function setCaloriesCalculees(int $caloriesCalculees) {
        $this->caloriesCalculees = $caloriesCalculees;
    }

    public function getPoidsDuJour(): int {
        return $this->poidsDuJour;
    }
    public function setPoidsDuJour(int $poidsDuJour) {
        $this->poidsDuJour = $poidsDuJour;
    }

}
