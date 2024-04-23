<?php

function is_palindrome($input) {
    $input = strtolower(preg_replace("/[^a-zA-Z0-9]/", "", $input));
    $reversed = strrev($input);
    return $input === $reversed;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input)); 
