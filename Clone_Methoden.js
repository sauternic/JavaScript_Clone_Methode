
//Kann tief Kopieren Arrays und Objekte!! 
Object.prototype.clone = function clone(o)
{
    var o =  o || this;
    //Neues Objekt Erzeugen
    if (o instanceof Array)//Array und Object sind instanceof Object
        var newObj = [];   //Aber nur Array ist instanceof Array!
    else
        var newObj = {};

    //Objekt besteht immer aus {name : wert, usw.} paaren.
    // for in Schleife durchläuft alle namen der Paare.
    for (var name in o)
    {
        //Object und Array werden durch '!' oder '!=' als false_
        //ausgewertet so das else Teil
        if(typeof o[name] != 'object')
      //if(!((o[name]) instanceof Object))
        {
            //Eigenschaften Kopieren von alt zu neuem Objekt bzw. Array
            //alert ('name: ' + name + '\no[name]: ' + o[name] );
            newObj[name] = o[name];
        }
        else
        {
            //Rekursives tiefes Kopieren
            //alert ('eigens: ' + eigens + '\no[eigens]: ' + o[eigens] );
            newObj[name] = clone(o[name]);
        }
    }
    return newObj;
}

//******************************************************************************************************

//'Static' Variante

//Kann tief Kopieren Arrays und Objekte!!
var MeineFunktionen = {}; //Namespace
MeineFunktionen.clone = function(o)
{
    //Neues Objekt Erzeugen
    if (o instanceof Array)//Array und Object sind instanceof Object
        var newObj = [];   //Aber nur Array ist instanceof Array!
    else
        var newObj = {};

    for (var eigens in o)
    {
        //Object und Array werden durch '!' oder '!=' als false ausgewertet so das else Teil
        if(typeof o[eigens] != 'object')
      //if(!((o[eigens]) instanceof Object))
        {
            //Eigenschaften Kopieren von alt zu neuem Objekt bzw. Array
            //alert ('eigens: ' + eigens + '\no[eigens]: ' + o[eigens] );
            newObj[eigens] = o[eigens];
        }
        else
        {
            //Rekursives tiefes Kopieren
            alert ('eigens: ' + eigens + '\no[eigens]: ' + o[eigens] );
            newObj[eigens] = MeineFunktionen.clone(o[eigens]);
        }
    }
    return newObj;
}
