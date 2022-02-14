<?php

namespace Tec\Translation\Http\Requests;

use Tec\Support\Http\Requests\Request;

class TranslationRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
        ];
    }
}
