<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('activityLevelDescription', [$this, 'getActivityLevelDescription']),
            new TwigFunction('activityLevelIcon', [$this, 'getActivityLevelIcon']),
        ];
    }

    public function getActivityLevelDescription(int $level): string
    {
        switch ($level) {
            case 1:
                return 'Peu active';
            case 2:
                return 'Modérément active';
            case 3:
                return 'Active';
            case 4:
                return 'Très active';
            default:
                return 'N/A';
        }
    }

    public function getActivityLevelIcon(int $level): string
    {
        switch ($level) {
            case 1:
                return 'fa-bed'; // Icône pour 'Peu active'
            case 2:
                return 'fa-user'; // Icône pour 'Modérément active'
            case 3:
                return 'fa-walking'; // Icône pour 'Active'
            case 4:
                return 'fa-running'; // Icône pour 'Très active'
            default:
                return 'fa-question'; // Icône par défaut
        }
    }
}
