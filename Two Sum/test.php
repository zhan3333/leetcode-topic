<?php
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//Example:
//Given nums = [2, 7, 11, 15], target = 9,
//
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

function two_swm ($arr, $target) {
    $k = count($arr) - 1;
    for ($i = 0; $i < $k; $i ++) {
        for ($j = $i + 1; $j < $k + 1; $j ++) {
            if ($arr[$i] + $arr[$j] == $target) return [$i, $j];
        }
    }
    return [];
}

$test = [2, 7, 11, 15];
$target = 9;
var_dump(two_swm($test, $target));