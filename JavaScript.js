function ulke(s1,s2) 
{
    var s1 = document.getElementById(s1)
    var s2 = document.getElementById(s2)

    s2.innerHTML ="";
    
    
    
    if(s1.value=="turkiye")
    {
        var optionArray = ['ütfen bir il seçiniz|- Lütfen Bir İl Seçiniz -', 'istanbul|İstanbul', 'kocaeli|Kocaeli', 'izmir|İzmir', 'ankara|Ankara']
    }

    else if (s1.value == 'america') 
    {
        var optionArray = ['ütfen bir il seçiniz|- Lütfen Bir İl Seçiniz -', 'new york|New York', 'kaliforniya|Kaliforniya', 'teksas|Teksas', 'florida|Florida']
    }

    for(var option in optionArray) 
    {
        var pair = optionArray[option].split("|")
        var newoption = document.createElement("option")

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption)
    }

}




function il(u1,u2) 
{
    var u1 = document.getElementById(u1)
    var u2 = document.getElementById(u2)

    u2.innerHTML ="";
    
    
    
    if(u1.value == "istanbul")
    {
        var ilceArray = ['avcılar|Avcılar', 'beyoğlu|Beyoğlu', 'kadıköy|Kadıköy']
    }

    else if (u1.value == "izmir") {
        var ilceArray = ['buca|Buca', 'dikili|Dikili', 'karşıyaka|Karşıyaka']
    }


    else if (u1.value == "kocaeli") {
        var ilceArray = ['gebze|Gebze', 'kandıra|Kandıra']
    }


    else if (u1.value == "ankara") {
        var ilceArray = ['akyurt|Akyurt', 'gölbaşı|Gölbaşı', 'polatlı|Polatlı']
    }

    else if (u1.value == "new york") {
        var ilceArray = ['manhattan|Manhattan', 'brooklyn|Brooklyn', 'the bronx|The Bronx']
    }

    else if (u1.value == "kaliforniya") {
        var ilceArray = ['lake|Lake', 'los angeles|Los Angeles', 'sacramento|Sacramento']
    }

    else if (u1.value == "teksas") {
        var ilceArray = ['houston|Houston', 'dallas|Dallas', 'austin|Austin']
    }

    else if (u1.value == "florida") {
        var ilceArray = ['branford|Branford', 'boca raton|Boca Raton', ]
    }

    for(var option in ilceArray){

        var pair1 = ilceArray[option].split("|")
        var newoption1 = document.createElement("option")

        newoption1.value = pair1[0]
        newoption1.innerHTML = pair1[1]
        u2.options.add(newoption1)

    }
}
