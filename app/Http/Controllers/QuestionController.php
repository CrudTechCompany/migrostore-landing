<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    public function store(Request $req): JsonResponse
    {
        $rules=[
            'name'=>'required|min:1',
            'email'=>'required|regex:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',
            'message'=>'required|min:1'
        ];
        $validator=Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }else{
            $question = Question::create($req->all());
            return response()->json($question, 201);
        }

    }

    public function terms() {
        return response()->view('terms_and_conditions');
    }
}
