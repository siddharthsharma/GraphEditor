BillOfMaterial = function(graph)
{
    this.graph = graph;
    var that = this;
   
    //this.bidTracerClient = new BidTracerClient();
    
    var AddProduct = function(bom)
    {
        // //Check if NodeId value exists in BOM
        // var rows = xmlDoc.getElementsByTagName("tr")[0];
        // var found=false;

        // for(var i=1;i<rows.length;i++)
        // {
        //     if(rows[i].firstChild.innerHTML==nodeId)
        //     {
        //         found=true;
        //         break;
        //     }
        // }
        
        // if(!found)
        // {
        //     var success = mxUtils.bind(this, function (resp) {
        //         this.spinner.stop();
        //         UpdateBOM(resp, 'Add');
        //     });

        //     var error = mxUtils.bind(this, function (resp) {
        //         this.spinner.stop();

        //         if (resp != null) {
        //             this.handleError(resp);
        //         }
        //     });
            
        //     var bidtracerContext = new BidtracerContext(this);
        //     this.bidtracer.LoadNodeInfo(bidtracerContext.selectedNodeId(), bidtracerContext.selectedTree() , success, error);
        // }

        alert('Add Product');
    }

    var DeleteProduct = function(nodeId)
    {
        alert('Delete');
    }

    var Init = function()
    {
        InitStencilAddition();
        InitStencilDeletion();
    }

    var InitStencilAddition = function()
    {
        that.graph.addListener(mxEvent.CELLS_ADDED, mxUtils.bind(that, function(sender, evt)
        {
		    var addedCell = evt.properties.cells[0];
			//var cellValue = addedCell.value;

            // if(typeof cellValue!== 'undefined' && cellValue.nodeName=='BidtracerStencil')
            // {
                //var nodeId = cellValue.getAttribute("NodeId");
                var bom = that.graph.model.getCell('BOM');
                
                var valueXml = bom.getValue();
                var xmlDoc = mxUtils.parseXml(valueXml);
             
                if(typeof bom !== 'undefined' && bom!=null )
                {
                    AddProduct(bom);
                    //alert('Add Product');
                }
            //}
        }));
    }
                
    var InitStencilDeletion = function()
    {
        that.graph.addListener(mxEvent.CELLS_REMOVED, function(sender, evt)
        {
            //Remove it from BOM, that is it
            var addedCell = evt.properties.cells[0];
            //var cellValue = addedCell.value;

            // if(typeof cellValue!== 'undefined' && cellValue.nodeName=='BidtracerStencil')
            // {
                //var nodeId = cellValue.getAttribute("NodeId");
                var bom = that.graph.model.getCell('BOM');
                
                if(typeof bom !== 'undefined' && bom!=null )
                {
                    // var rows = xmlDoc.getElementsByTagName("tr")[0];
                    // var found=false;

                    // for(var i=1;i<rows.length;i++)
                    // {
                    //     if(rows[i].firstChild.innerHTML==nodeId)
                    //     {
                    //         found=true;
                    //         break;
                    //     }
                    // }
                    
                    // if(found)
                    // {
                        DeleteProduct(20);
                        //UpdateBOM(obj,'delete')
                        //alert('delete');
                    //}
                }
            //}	
        });
    }

    Init();

    
} 

BillOfMaterial.prototype.Insert = function()
{
    var vx = this.graph.insertVertex(this.graph.getDefaultParent(), 'BOM', '<table width="800px" height="100%" cellpadding="4" style="border-collapse:collapse;width:800px;height:100%;table-layout:fixed;">' +
         '<tr style="background-color:#858585;color:#ffffff;"><th style="width:200px;word-break:break-all;">DID</th><th align="left" style="width:200px;word-wrap: break-word">DESCRIPTION</th><th align="left" style="width:200px;word-wrap: break-word">MANUFACTURER</th><th align="left" style="width:200px;word-wrap: break-word">PART NUMBER</th><th align="left" style="width:200px;word-wrap: break-word">QTY</th></tr>' +
         '<tr><td style="width: 200px;word-break:break-word;">lkajdasasd jaslda;lsd; askd;akdadiodzxmcn ,m zxmcn,zncmnz,xmnc,mn</td><td style="width: 200px;word-wrap: break-word"></td><td style="width: 200px;word-wrap: break-word"></td><td style="width: 200px;word-wrap: break-word"></td><td style="width: 200px;word-wrap: break-word"></td></tr>' +
        '</table>', 40, 40, 80, 30, 'text;html=1;fillColor=#ffffff;overflow=fill;rounded=1;table-layout:fixed;');
        
        //this.graph.toggleCellStyles(mxConstants.STYLE_EDITABLE,1,vx);
}

BillOfMaterial.prototype.Refresh = function()
{
    var cells = this.graph.getChildCells(this.graph.getDefaultParent(), false, false);

    console.log(cells);

}
