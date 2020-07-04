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

function createDivergingBar( barData , width, height, yAxisOffsetY, barWidth) {
    
    var barSvg = d3.select( 'body' ).append( 'svg' );
    barSvg.attr( 'width', width ).attr( 'height', height );

    var scale = d3.scaleLinear()
                .domain( [ d3.min(barData), d3.max(barData) ] )
                .range( [ -yAxisOffsetY, height-yAxisOffsetY ] );

    var scaleInverted = d3.scaleLinear()
                .domain( [ d3.max(barData), d3.min( barData ) ] )
                .range( [ -yAxisOffsetY, height - yAxisOffsetY ] );

    var zeroPos = yAxisOffsetY - ( Math.abs( scaleInverted(0) ) );

    var yAxis = d3.axisLeft()
                .scale( scaleInverted );

    barSvg.append( 'g' )
       .attr( 'transform', 'translate(50, ' + yAxisOffsetY + ')')
       .call( yAxis );

    var xScale = d3.scaleBand().range( [0, width - 100] );

    var marginSides = 5;
    var barSpace = ( barWidth + 2 * marginSides );
    var initialOffset = 75
    
    barSvg.selectAll( '.bar' )
        .data( barData )
        .enter().append( 'rect' )
        .attr( 'class', 'bar' )
        .attr( 'fill', function( d,i ){ return dataColors[ i ] } )
        .attr( 'x', function( d, i ) { 
            return i * barSpace + initialOffset;
        })
        .attr( 'y', function( d, i ) { 
            return d > 0 ? zeroPos - scale( d ) : zeroPos
        })
        .attr( 'width', barWidth)
        .attr( 'height', function( d, i ) { return Math.abs( scale( d ) ); });
}

//TODO cleanup code
function createBar( barData, labelData, width, height ){
    var barSvg = d3.select( 'body' ).append( 'svg' );
    barSvg.attr( 'width', width ).attr( 'height', height );
    
    var scale = d3.scaleLinear()
        .domain( [ d3.min(barData), d3.max(barData) ] )
        .range( [ 0, width ] );
    
    var labelScale = d3.scaleBand()
        .range( [0, 60*4 ] )
        .domain(labelData);
    
    var yAxis = d3.axisLeft()
            .scale( labelScale );
    
    var xAxis = d3.axisBottom()
        .scale( scale );
    
    barSvg.append( 'g' )
       .attr( 'transform', 'translate(30, ' + 250 + ')')
       .call( xAxis );
    
    barSvg.append( 'g' )
       .attr( 'transform', 'translate(30, ' + 0 + ')')
       .call( yAxis );
    
    //-----
    barSvg.selectAll( '.bar' )
        .data( barData )
        .enter().append( 'rect' )
        .attr( 'class', 'bar' )
        .attr( 'fill', 'green' )
        .attr( 'x', function( d, i ) { 
            return 30;
        })
        .attr( 'y', function( d, i ) { 
            return i * 60
        })
        .attr( 'width', function( d, i ) { return Math.abs( scale( d ) ); })
        .attr( 'height', 50);
}