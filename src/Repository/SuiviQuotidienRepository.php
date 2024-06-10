<?php

namespace App\Repository;

use App\Entity\SuiviQuotidien;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class SuiviQuotidienRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SuiviQuotidien::class);
    }

    // Votre méthode personnalisée ici
    public function findDernierPoidsParUtilisateur($userId)
    {
        return $this->createQueryBuilder('s')
            ->where('s.utilisateur = :userId')
            ->setParameter('userId', $userId)
            ->orderBy('s.date', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findCaloriesCalculeesParUtilisateur($userId)
    {
        return $this->createQueryBuilder('s')
            ->select('SUM(s.caloriesCalculees) as totalCalories')
            ->where('s.utilisateur = :userId')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findDernierSuiviParUtilisateur(int $utilisateur): ?SuiviQuotidien
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.utilisateur = :utilisateur')
            ->setParameter('utilisateur', $utilisateur)
            ->orderBy('s.date', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
