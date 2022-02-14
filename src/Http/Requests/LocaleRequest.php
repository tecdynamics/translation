<?php

namespace Tec\Translation\Http\Requests;

use Tec\Base\Supports\Language;
use Tec\Support\Http\Requests\Request;

class LocaleRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'locale' => 'required|in:' . implode(',', collect(Language::getListLanguages())->pluck(0)->unique()->all()),
        ];
    }
}
