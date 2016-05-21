<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Config;

class HomeController extends Controller
{
	/**
	 * Application Index
	 *
	 * @return view
	 */
	public function index()
	{
		return view('index');
	}
	
}