<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class CobaController extends Controller
{
    public function index()
    {
        return view('coba');
    }

    public function tombol()
    {
        return Inertia::render('visitor/About');
    }
}
