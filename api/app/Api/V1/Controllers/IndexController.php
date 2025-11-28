<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\JsonResponse;

class IndexController extends BaseApiController
{
    public function index(): JsonResponse
    {
        return $this->successfulResponseWithData([
            't' => 100,
        ]);
    }
}
