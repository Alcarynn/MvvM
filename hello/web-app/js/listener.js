 $('form').submit( function(){
            $("#tableId").text("");
            var type=$( "select option:selected" ).val();
            var param=$( "#recherche" ).val();
            if(type==="title"||type==="id"||type==="price"||type==="all"){
                     getBy(type,param);
             }

           return false;
 });