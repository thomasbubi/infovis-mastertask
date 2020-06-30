/**
 * creates a Pie Chart
 * @param {Array} pieData - Array of ordinal data. The number of entries in this array should match with the number of colors defined in data.js
 * @param {Array} pieLabels - Array of strings which label each part of the pie chart
 * @param {Number} width - width and height of the pie chart
 */
function createPie( pieData, pieLabels, width ){
    var diameter = width;
    var pieSvg = d3.select( 'body' ).append( 'svg' );

    pieSvg.attr( 'width', diameter ).attr( 'height', diameter );

    var pie = d3.pie();
    var arc = d3.arc()
                .innerRadius( diameter/10 )
                .outerRadius( diameter/2 );
    
    var label = d3.arc()
                .innerRadius( diameter/10 )
                .outerRadius( diameter/2 );
    
    var arcs = pieSvg.selectAll( 'arc' )
                .data( pie( pieData ) )
                .enter()
                .append( 'g' )
                .attr( 'class', 'arc' )
                .attr( 'transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')' );

    var arrayAccessIsSafe = pieData.length == dataColors.length;
    
    if( arrayAccessIsSafe ){
        console.warn('Number of data values differ from number of colors. A random color will be generated for each part of the pie chart.')
    }
    
    /*
     * fill the arc with color
     * if arrayAccessIsSafe isn't safe, generate random color
     * code for random color generator from
     * https://css-tricks.com/snippets/javascript/random-hex-color/
     */
    arcs.append( 'path' )
        .attr( 'fill', function( d, i ) {
            return arrayAccessIsSafe ?
                dataColors[i] + 'ff' :
                '#' + Math.floor(Math.random()*16777215).toString(16);
        })
        .attr( 'd', arc );

    /*
     * generate labels
     * if label belongs to data that equals zero, it will not be displayed
     */
    arcs.append( 'text' )
       .attr( 'transform', function( d ) { 
                return 'translate(' + label.centroid( d ) + ')'; 
        })
       .text( function( d, i ){
            return i < pieLabels.length && i < pieData.length && pieData[i] > 0 ?
                pieLabels[i] : '';
        } );
    
}
