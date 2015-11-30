var downgradeEl = document.getElementById('hide-downgrades');
if(downgradeEl) {
    var downgradeWeaponLogic = function(bool) {
        var c = 'filter-hide-downgrades';
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

var optimizerEl = document.getElementById('optimizer-submit');
if(optimizerEl) {
    var goToOptimizedPage = function() {
        var level = document.getElementById('optimizer-level').value;
        document.location = '/dobril/optimizer/' + (level) + '.html'
    };
    optimizerEl.addEventListener('click', goToOptimizedPage);
}
