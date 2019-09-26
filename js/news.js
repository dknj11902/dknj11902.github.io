(function ($) {
    $(function () {

        $.getJSON('/assets/updates.json', function(data) {         
            $.each(data["updates"].reverse(), function(i,v) {
                var new_tr = `<div class="col s12 m6">
                <div class="card yellow lighten-2 z-depth-3 ">
                    <div class="card-content black-text">
                        <span class="card-title">`+v["title"] + " (" + v["date"] + ")" + (i == 0 ? "<span class=\"new badge\"></span>" : "") + `</span>
                        <p>`+v["content"]+`</p>`
                
                $.each(v["files"], function(ii,vv) {
                    new_tr += `<a target="_blank" href="/assets/handouts/`+vv+`" class="waves-effect waves-light btn"><i class="material-icons left">file_download</i>`+vv+`</a>`
                });
                
                new_tr += `</div></div></div>`;
                $(".updates-row").append(new_tr)
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space