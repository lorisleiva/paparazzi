<?php

/*
| Launch the SPA.
*/

Route::view('/{any}', 'app')->where('any', '.*');
