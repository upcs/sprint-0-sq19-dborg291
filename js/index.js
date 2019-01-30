function getFactors()
{
    var factor1 = Number(document.getElementById("factor1").value);
    var factor2 = Number(document.getElementById("factor2").value);
    document.getElementById("factor3").value = addition(factor1, factor2);
}