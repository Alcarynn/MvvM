 $('form').submit( function(){
            $("#tableId").text("");
           if( $( "select option:selected" ).val()=='title'){
                getByTitle($("#recherche").val());
           }else{
                if($( "select option:selected" ).val()=='price'){
                    getByPrice($("#recherche").val());
                }
                else{
                    getById($("#recherche").val());
                }

           }
           return false;
        });