
function addTable(nodeName,data){
            $(nodeName).append('<table>');
            tHead="<tr>";
            tBody="";
            for(ind in data){
                    tBody+="<tr>";
                    json=data[ind];
                    for(prop in json){
                        if(ind==0){
                          tHead+="<th>"+prop+"</th>";
                        }
                        tBody+='<td>' +json[prop]+ '</td>';
                    }
                    tBody+='<td><a href="http://localhost:8080/hello/detail.html?id='+data[ind].id+'">details</td>';
                    tBody+="</tr>";
            }
             tHead+="</tr>";
             $(nodeName).append(tHead);
             $(nodeName).append(tBody);
		     $(nodeName).append('</table>');
}

function getById(nodeName,data){
		 $(nodeName).append("<textarea></textarea>");
         $("textarea").append("id: "+data.id);
         $("textarea").append(" titre: "+data.title);
         $("textarea").append(" prix: "+data.price);
}

function getBy(type,param){
		var data = {};
		var xmlhttp = new XMLHttpRequest();
        var request= "http://localhost:8080/hello/rest/hello/mock/";
		if(type!="id"){
		    request+="book/";
		    if(type!=""){
		        request+=type+"/"+param;
		    }
		}
		else{
		     request+=param;
		}
		xmlhttp.open("GET", request, true);
		xmlhttp.onreadystatechange = function () {
		  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			data = JSON.parse(xmlhttp.responseText);
            if(type!="id"){
             addTable("#tableId",data);
            }
            else{
               getById("#tableId",data);
            }

		  }
		};
        xmlhttp.send(xmlhttp);
}


