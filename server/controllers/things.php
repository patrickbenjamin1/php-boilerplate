<?php

declare(strict_types=1);

namespace Controllers;

class Things extends Controller
{
    public static function get(\Utils\Request $request)
    {
        \Utils\Template::view('things');
    }
}
