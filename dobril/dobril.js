var filters = ['hide-downgrades-damage', 'hide-downgrades-hp', 'hide-downgrades-mana', 'hide-downgrades-saves'];

var addFilter = function(filter) {
    var downgradeEl = document.getElementById(filter);
    if(downgradeEl) {
        var downgradeWeaponLogic = function(bool) {
            var c = 'filter-' + filter;
            if(bool) {
                document.body.classList.add(c);
            } else {
                document.body.classList.remove(c);
            }
        };
        var toggleDowngradeClass = function(e) {
            downgradeWeaponLogic(e.target.checked);
        };
        downgradeEl.addEventListener('click', toggleDowngradeClass);
        toggleDowngradeClass({target: downgradeEl});
    }
};

for(var i = 0; i < filters.length; i++) {
    var filter = filters[i];
    addFilter(filter);
}

var optimizerEl = document.getElementById('optimizer-submit');
if(optimizerEl) {
    var goToOptimizedPage = function() {
        var level = document.getElementById('optimizer-level').value;
        var alignment = document.getElementById('optimizer-alignment').value;
        var flags = [level, alignment];
        document.location = '/dobril/optimizer/' + (flags.join('_')) + '.html'
    };
    optimizerEl.addEventListener('click', goToOptimizedPage);
}
