//sub fonction
function addTable(type,nodeName,data){
            var tHead="<tr>";
            var tBody="";
            $(nodeName).append('<table>');
            for(ind in data){
                    tBody+="<tr>";
                    json=data[ind];
                    for(prop in json){
                        if(ind==="0"){
                          tHead+="<th>"+prop+"</th>";
                        }
                        tBody+='<td>' +json[prop]+ '</td>';
                    }
                    if(type!="id"){
                        tBody+='<td><a href="http://localhost:8080/hello/details.html?id='+data[ind].id+'">details</td>';
                     }
                     tBody+="</tr>";
             }
             tHead+="</tr>";
             $(nodeName).append(tHead);
             $(nodeName).append(tBody);
		     $(nodeName).append('</table>');
}


function createPath(type,param){
     var path= "http://localhost:8080/hello/rest/hello/mock/";
    		if(type!="id"){
    		    path+="book/";
    		    if(type!="all"){
    		        path+=type+"/"+param;
    		    }
    		}
    		else{
    		     path+=param;
    		}
       return path;
}

function parseData(type,data){
    if(type==="id"){
        data=[data];
        type="id";
    }
    addTable(type,"#tableId",data);
}
//sub

//process
function getBy(type,param){
		var data = {};
		var xmlhttp = new XMLHttpRequest();
        var request= createPath(type,param);
		xmlhttp.open("GET", request, true);
		xmlhttp.onreadystatechange = function () {
		  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			data = JSON.parse(xmlhttp.responseText);
            parseData(type,data);
		  }
		};
        xmlhttp.send(xmlhttp);
}
//pro

//loader
 $().ready(()=>{
            var url = $.url(window.location.href);
             if(url.attr('file')!="details.html"){
                getBy("all","");
             }
             else{
                getBy("id",url.param('id'));
             }
 });

