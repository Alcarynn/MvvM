
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


function getAll(){
	var data = [];
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "http://localhost:8080/hello/rest/hello/mock/book", true);
	xmlhttp.onreadystatechange = function () {
		  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			data = JSON.parse(xmlhttp.responseText);
			 addTable("#tableId",data);
		  }
		};
        xmlhttp.send(xmlhttp);
        return data;
}


function getById(id){
	var data = {};
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "http://localhost:8080/hello/rest/hello/mock/"+id, true);
	xmlhttp.onreadystatechange = function () {
		  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			data = JSON.parse(xmlhttp.responseText);
			  $("#tableId").append("<textarea></textarea>");
			  $("textarea").append("id: "+data.id);
              $("textarea").append(" titre: "+data.title);
              $("textarea").append(" prix: "+data.price);


		  }
		};
        xmlhttp.send(xmlhttp);
}


function getByPrice(price){
	var data = {};
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "http://localhost:8080/hello/rest/hello/mock/book/price/"+price, true);
	xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			data = JSON.parse(xmlhttp.responseText);
			 addTable("#tableId",data,["type","id","title","price","link"]);
		  }
		};
        xmlhttp.send(xmlhttp);
}

function getByTitle(title){
	var data = {};
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "http://localhost:8080/hello/rest/hello/mock/book/title/"+title, true);
	xmlhttp.onreadystatechange = function () {
		  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			data = JSON.parse(xmlhttp.responseText);
			 addTable("#tableId",data);
		  }
		};
        xmlhttp.send(xmlhttp);
}
