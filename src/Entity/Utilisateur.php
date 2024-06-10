<?php

namespace App\Entity;

// Importation des classes et leurs methodes, et implementer leurs interfaces (exemple: implements "UserInterface")
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: "App\Repository\UtilisateurRepository")]
#[ORM\Table(name: "utilisateur")]

class Utilisateur implements UserInterface, PasswordAuthenticatedUserInterface {

    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: "AUTO")]
    #[ORM\Column(type: "integer")]
    private $idUtilisateur;

    #[ORM\Column(type: "string", length: 20, nullable: true)]
    private $avatar;

    #[ORM\Column(type: "string", length: 254)]
    private $email;

    #[ORM\Column(type: "string", length: 300)]
    private $password;

    #[ORM\Column(type: "string", length: 1)]
    private $sexe;

    #[ORM\Column(type: "string", length: 15)]
    private $nom;

    #[ORM\Column(type: "string", length: 15)]
    private $prenom;

    #[ORM\Column(type: "date")]
    private $dateNaissance;

    #[ORM\Column(type: "integer", length: 3)]
    private $taille;

    #[ORM\Column(type: "integer", length: 1)]
    private $tauxActivitePhysique;



    public function getIdUtilisateur(): int
    {
        return $this->idUtilisateur;
    }


    public function getAvatar(): string
    {
        return $this->avatar;
    }
    public function setAvatar(string $avatar)
    {
        $this->avatar = $avatar;
    }


    public function getUserIdentifier(): string
    {
        return $this->email;
    }
    public function setUserIdentifier(string $email)
    {
        $this->email = $email;
    }


    public function getPassword(): string
    {
        return $this->password;
    }
    public function setPassword(string $password)
    {
        $this->password = $password;
    }


    public function getSexe(): string
    {
        return $this->sexe;
    }
    public function setSexe(string $sexe)
    {
        $this->sexe = $sexe;
    }


    public function getNom(): string
    {
        return $this->nom;
    }
    public function setNom(string $nom)
    {
        $this->nom = $nom;
    }
    

    public function getPrenom(): string
    {
        return $this->prenom;
    }
    public function setPrenom(string $prenom)
    {
        $this->prenom = $prenom;
    }


    public function getDateNaissance(): \DateTimeInterface
    {
        return $this->dateNaissance;
    }
    public function setDateNaissance(\DateTimeInterface $dateNaissance)
    {
        $this->dateNaissance = $dateNaissance;
    }


    public function getTaille(): int
    {
        return $this->taille;
    }
    public function setTaille(int $taille)
    {
        $this->taille = $taille;
    }


    public function getTauxActivitePhysique(): int
    {
        return $this->tauxActivitePhysique;
    }
    public function setTauxActivitePhysique(int $tauxActivitePhysique)
    {
        $this->tauxActivitePhysique = $tauxActivitePhysique;
    }




    public function getRoles(): array {
        return ['ROLE_USER'];
    }

    public function getSalt(): ?string {
        return null;
    }
    public function eraseCredentials(): void {
    }

    public function getUsername(): string
    {
        return $this->email;
    }

}

