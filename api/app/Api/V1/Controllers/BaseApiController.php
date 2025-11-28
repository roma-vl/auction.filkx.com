<?php

namespace App\Api\V1\Controllers;

use app\Http\Controllers\Controller;
use App\Traits\HasApiJsonResponse;

abstract class BaseApiController extends Controller
{
    use HasApiJsonResponse;
}
