

{
    const GALLERY_ID = 'galleryContainer'
    const COLS = 3;
    const projects = [
        { name: 'Tetris1', link: '#' },
        { name: 'Tetris2', link: '#' },
        { name: 'Tetris3', link: '#' },
        { name: 'Tetris4', link: '#' },
        { name: 'Tetris5', link: '#' },
        { name: 'Tetris6', link: '#' },
        { name: 'Tetris7', link: '#' },
        { name: 'Tetris8', link: '#' }
    ]

    const COLORS = [['#FF9438', '#FFF7F1', '#FFBE86', '#FF7600', '#FF7600'],
    ['#7543E0', '#C5C2CC', '#9B7DDA', '#5710F2', '#3E00C4'],
    ['#C1F937', '#F2F6E8', '#D6F883', '#B4FD00', '#AEF400'],
    ['#31D1D8', '#B5BFBF', '#6ECCD1', '#01E4EE', '#00ADB5']]

    const init = () => {

        let $container = $('#' + GALLERY_ID);
        const ROWS = Math.ceil(projects.length / COLS);
        let colWidth = $container.outerWidth() / COLS;

        (new Array(COLS * ROWS)).fill(1).forEach((_ignore, i) => {
            let p = projects[i];
            if (!p) {
                p = { name: 'Coming Soon' };
            }
            let $div = $("<div>");
            $div.text(p.name);
            $div.addClass('box');
            $div.css('flex-basis', (100 / COLS) + '%');
            $div.css('background-color', COLORS[i % COLORS.length][i % COLORS[0].length]);
            $div.css('height', colWidth);
            $div.on('mouseover', (e) => {
                $(e.target).addClass('on');
            });
            $div.on('mouseout', (e) => {
                $(e.target).removeClass('on');
            });
            $container.append($div);
        })
    }

    addEventListener('load', init);
}


