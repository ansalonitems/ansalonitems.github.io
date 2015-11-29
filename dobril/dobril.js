var downgradeEl = document.getElementById('hide-downgrades');
if(downgradeEl) {
    var toggleDowngradeClass = function(e) {
        var c = 'filter-hide-downgrades';
        if(e.target.checked) {
            document.body.classList.add(c);
        } else {
            document.body.classList.remove(c);
        }
    };
    downgradeEl.addEventListener('click', toggleDowngradeClass);
}
