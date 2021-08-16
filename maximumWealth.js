// https://leetcode.com/problems/richest-customer-wealth/
var maximumWealth = accounts => Math.max(...accounts.map(el => el.reduce((a, b) => a+b)))