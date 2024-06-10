<?php

// src/Repository/ProduitRepository.php

namespace App\Repository;

use App\Entity\Produit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Produit|null find($id, $lockMode = null, $lockVersion = null)
 * @method Produit|null findOneBy(array $criteria, array $orderBy = null)
 * @method Produit[]    findAll()
 * @method Produit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Produit::class);
    }

    public function findProduitsAjoutesParSuivi(int $idSuivi, $date): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.suivi = :suivi')
            ->andWhere('p.dateAjout = :date')
            ->setParameter('suivi', $idSuivi)
            ->setParameter('date', $date)
            ->getQuery()
            ->getResult();
    }
}
