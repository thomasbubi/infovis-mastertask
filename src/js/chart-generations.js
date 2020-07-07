/**
 * creates a Pie Chart
 * @param {Array} pieData - Array of ordinal data. The number of entries in this array should match with the number of colors defined in data.js
 * @param {Array} pieLabels - Array of strings which label each part of the pie chart
 * @param {Number} width - width and height of the pie chart
 */
function createPie( containerSelector, pieData, pieLabels, width, colorArray){
    var height = width  - 25;
    var pieSvg = d3.select( containerSelector ).append( 'svg' );

    pieSvg.attr( 'width', width ).attr( 'height', height);

    var diameter = Math.min(width, height);

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
                .attr( 'transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')' )
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseout', mouseout);

    var tooltip = d3.select(containerSelector).append("div")
        .attr("class", "toolTip")
        .style("display", "none");
    function mouseover() {
        tooltip.style('display', 'inline');
    }
    function mousemove() {
        var d = d3.select(this).data()[0]
        tooltip
            .html(d.data + '%')
            .style('left', (d3.event.pageX + 20) + 'px')
            .style('top', (d3.event.pageY - 12) + 'px');
    }
    function mouseout() {
        tooltip.style('display', 'none');
    }


    var arrayAccessIsSafe = pieData.length == colorArray.length;

    if( !arrayAccessIsSafe ){
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
                colorArray[i] + 'ff' :
                '#' + Math.floor(Math.random()*16777215).toString(16);
        })
        .attr( 'd', arc );


    /*
     * generate labels
     * if label belongs to data that equals zero, it will not be displayed
     */
    /*arcs.append( 'text' )
       .attr( 'transform', function( d ) { 
                return 'translate(' + label.centroid( d ) + ')';
        })
       .text( function( d, i ){
            return i < pieLabels.length && i < pieData.length && pieData[i] > 0 ?
                pieData[i] : '';
        } );

     */

    var legend = pieSvg.selectAll(".legend")
        .data(pie(pieData))
        .enter().append("g")
        .attr("transform", function(d, i) {
            return "translate(" + (width-75) + "," + (i*15) + ")";
        })
        .attr("class", "legend");

    legend.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", function(d,i) {
            return colorArray[i];
        });

    legend.append("text")
        .text( function( d, i){
            return pieLabels[i];
        })
        .style("font-size", 12)
        .attr("y", 10)
        .attr("x", 11);


}

function createDivergingBar( barData , width, height, yAxisOffsetY, barWidth) {
    
    var barSvg = d3.select( '#area4' ).append( 'svg' );
    barSvg.attr( 'width', width ).attr( 'height', height );

    var scale = d3.scaleLinear()
                .domain( [ -75, 75 ] )
                .range( [ -yAxisOffsetY, height - yAxisOffsetY ] );

    var scaleInverted = d3.scaleLinear()
                .domain( [ 75, -75 ] )
                .range( [ -yAxisOffsetY, height - yAxisOffsetY ] );

    var zeroPos = yAxisOffsetY - ( Math.abs( scaleInverted(0) ) );

    var yAxis = d3.axisLeft()
                .scale( scaleInverted )
                .ticks(15);

    barSvg.append( 'g' )
       .attr( 'transform', 'translate(50, ' + yAxisOffsetY + ')')
       .call( yAxis );

    var xScale = d3.scaleBand().range( [0, width - 100] );

    var marginSides = 3;
    var barSpace = ( barWidth + 2 * marginSides );
    var initialOffset = 60;

    var tooltip = d3.select("#area4").append("div")
        .attr("class", "toolTip")
        .style("display", "none");
    function mouseover() {
        tooltip.style('display', 'inline');
    }
    function mousemove() {
        var d = d3.select(this).data()[0]
        tooltip
            .html(d)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY - 30) + 'px');
    }
    function mouseout() {
        tooltip.style('display', 'none');
    }
    
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
        .attr( 'height', function( d, i ) { return Math.abs( scale( d ) ); })
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseout', mouseout);
    
        barSvg = d3.select( '#area4' ).append ('h2')
	.text('Local relevance for computed recommendation');
}


function createBarHorizontal( barData, labelData, width, height, barThickness, color, title01, title02, title03 ){
    
        barSvg = d3.select( '#area1' ).append ('h2')
	.text(title01);
    barSvg = d3.select( '#area1' ).append ('h2')
	.text(title02);
    barSvg = d3.select( '#area1' ).append ('h2')
	.text(title03);
    
    var margin = 5;
    var barThicknessWithMargin = barThickness + 2*margin;
    var barSvg = d3.select( '#area1' ).append( 'svg' );
    barSvg.attr( 'width', width ).attr( 'height', height );

    var tooltip = d3.select("#area1").append("div")
        .attr("class", "toolTip")
        .style("display", "none");
    function mouseover() {
        tooltip.style('display', 'inline');
    }
    function mousemove() {
        var d = d3.select(this).data()[0]
        tooltip
            .html(d + '%')
            .style('left', (d3.event.pageX + 20) + 'px')
            .style('top', (d3.event.pageY - 12) + 'px');
    }
    function mouseout() {
        tooltip.style('display', 'none');
    }

    var scale = d3.scaleLinear()
        .domain( [0, 100 ] )
        .range( [0 , width * 0.7] );

    var labelScale = d3.scaleBand()
        .range( [0, barThicknessWithMargin * labelData.length ] )
        .domain(labelData);

    var yAxis = d3.axisLeft()
        .scale( labelScale )
    var xAxis = d3.axisBottom()
        .scale( scale  );

    barSvg.append( 'g' )
        .attr( 'transform', 'translate(72, ' + (barThicknessWithMargin * labelData.length + 5) + ')')
        .call( xAxis );

    barSvg.append( 'g' )
        .attr( 'transform', 'translate(70, ' + 0 + ')')
        .call( yAxis );

    barSvg.selectAll( '.bar' )
        .data( barData )
        .enter().append( 'rect' )
        .attr( 'class', 'bar' )
        .attr( 'fill', color )
        .attr( 'x', function( d, i ) {
            return 72;
        })
        .attr( 'y', function( d, i ) {
            return i * barThicknessWithMargin + 5
        })
        .attr( 'width', function( d, i ) { return Math.abs( scale( d ) ); })
        .attr( 'height', barThickness)
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseout', mouseout);

}


function createBarVertical( barData, labelData, width, height, barThickness ){
    
    var margin = 5;
    var barThicknessWithMargin = barThickness + 2*margin;
    var barSvg = d3.select( '#area2' ).append( 'svg' );
    barSvg.attr( 'width', width ).attr( 'height', height );
    
    var scale = d3.scaleLinear()
        .domain( [ 0, 100 ] )
        .range( [ 0, height-50 ] );
    
    var scaleInverted = d3.scaleLinear()
        .domain( [ 100, 0 ] )
        .range( [ 0, height-50 ] );
    
    var labelScale = d3.scaleBand()
        .range( [0, barThicknessWithMargin * 4 ] )
        .domain(labelData);

    var yAxis = d3.axisLeft()
        .scale( scaleInverted );
    var xAxis = d3.axisBottom()
        .scale( labelScale );
    
    barSvg.append( 'g' )
       .attr( 'transform', 'translate(30, ' + (height - 50) + ')')
       .call( xAxis );
    
    barSvg.append( 'g' )
       .attr( 'transform', 'translate(30, ' + 0 + ')')
       .call( yAxis );

    barSvg.selectAll( '.bar' )
        .data( barData )
        .enter().append( 'rect' )
        .attr( 'class', 'bar' )
        .attr( 'fill', 'green' )
        .attr( 'x', function( d, i ) { 
            return i * barThicknessWithMargin  + 35
        })
        .attr( 'y', function( d, i ) { 
            return scaleInverted(0) - scale( d );
        })
        .attr( 'width', barThickness)
        .attr( 'height', function( d, i ) { return scale( d ); });

}
