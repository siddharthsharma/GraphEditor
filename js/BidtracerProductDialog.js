var BidtracerProductDialog = function(ui)
{
    this.ui=ui;

    var CreateTextInput=function(labelText, inputName, inputValue, container)
    {
        // var formGroup = document.createElement('div');
        // formGroup.setAttribute('class', 'form-group');

        var label = document.createElement('label');
        label.setAttribute('class','control-label');
        label.setAttribute('for',inputName);
        label.innerHTML = labelText;

        // <input id="cc-exp" name="cc-exp" type="tel" class="form-control cc-exp" value="" 
        // data-val="true" data-val-required="Please enter the card expiration"
        // data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" 
        // autocomplete="cc-exp">

        var inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('class','form-control');
        inputText.setAttribute('id',inputName);
        inputText.setAttribute('name',inputName);
        inputText.value = inputValue;

        container.appendChild(label);
        container.appendChild(inputText);

        return container;
    }

    var CreateTextArea=function(labelText, inputName, inputValue, cols, rows, maxLength, container)
    {
        // var formGroup = document.createElement('div');
        // formGroup.setAttribute('class', 'form-group');

        var label = document.createElement('label');
        label.setAttribute('class','control-label');
        label.setAttribute('for',inputName);
        label.innerHTML = labelText;

        // <input id="cc-exp" name="cc-exp" type="tel" class="form-control cc-exp" value="" 
        // data-val="true" data-val-required="Please enter the card expiration"
        // data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" 
        // autocomplete="cc-exp">

        var textArea = document.createElement('TEXTAREA');
       
        textArea.setAttribute('class','form-control');
        textArea.setAttribute('id',inputName);
        textArea.setAttribute('name',inputName);
        textArea.setAttribute('rows',rows);
        textArea.setAttribute('cols',cols);
        textArea.setAttribute('maxlength',maxLength);
        textArea.value = inputValue;

        container.appendChild(label);
        container.appendChild(textArea);

        return container;
    }

    var CreateRadioInput=function(labelText, options, value, container)
    {
        // var formGroup = document.createElement('div');
        // formGroup.setAttribute('class', 'form-group');

        var label = document.createElement('label');
        label.setAttribute('class','control-label');
        label.innerHTML = labelText;

        container.appendChild(label);

        for(var i=0;i<options.length;i++)
        {
            //     <div class="radio-custom radio-default radio-inline">
            //     <input type="radio" id="inputHorizontalMale" name="inputRadiosMale2">
            //     <label for="inputHorizontalMale">Male</label>
            //   </div>
            var radioOptionDiv = document.createElement('div');
            radioOptionDiv.setAttribute('class','radio-custom radio-default radio-inline');

            var radioInput = document.createElement('input');
            radioInput.setAttribute('type','radio');
            radioInput.setAttribute('id','input'+options[i]);
            radioInput.setAttribute('name','input'+labelText);
            radioOptionDiv.appendChild(radioInput);

            var radioLabel =document.createElement('label');
            radioLabel.setAttribute('for','input'+options[i]);
            radioLabel.innerHTML = options[i];
            radioOptionDiv.appendChild(radioLabel);    

            container.appendChild(radioOptionDiv);
        }

        return container;
    }

    var CreateTabs = function(tabs)
    {
        var tabContainer = document.createElement('div');
        tabContainer.setAttribute('style','box-sizing:border-box')
        tabContainer.setAttribute('class', 'nav-tabs-horizontal');
        tabContainer.setAttribute('data-plugin', 'tabs');

        var tabContent = document.createElement('div');
        tabContent.setAttribute('class', 'tab-content');
        

        var unorderedList = document.createElement('ul');
        unorderedList.setAttribute('class', 'nav nav-tabs nav-tabs-solid');
        unorderedList.setAttribute('role', 'tablist');

        for(var i=0;i<tabs.length;i++)
        {
            var listItem = document.createElement('li');
            listItem.setAttribute('class', 'nav-item');
            listItem.setAttribute('role', 'presentation');

            var anchor = document.createElement('a');
            anchor.setAttribute('class', 'nav-link ');
            anchor.setAttribute('data-toggle', 'tab');
            anchor.setAttribute('href', '#'+tabs[i].name.trim());
            anchor.setAttribute('role', 'tab');
            anchor.innerHTML=tabs[i].name;

            listItem.appendChild(anchor);
            unorderedList.appendChild(listItem);

            var tabPane = document.createElement('div');
            tabPane.setAttribute('class', 'tab-pane');
            tabPane.setAttribute('id', tabs[i].name.trim());
            tabPane.setAttribute('role', 'tabpanel');

            tabPane.appendChild(tabs[i].content);
            tabContent.appendChild(tabPane);

        }

        tabContainer.appendChild(unorderedList);
        tabContainer.appendChild(tabContent);

        return tabContainer;
    }

    var CreateDIDContent = function(data)
    {
        // var containerDiv = document.createElement('div');
        // containerDiv.setAttribute('class', 'container');

        // var rowDiv = document.createElement('div');
        // rowDiv.setAttribute('class', 'row');
        // containerDiv.appendChild(rowDiv);

        //col-sm-8 col-md-6 mx-auto

        // var colDiv = document.createElement('div');
        // colDiv.setAttribute('class', 'col-12');
        // rowDiv.appendChild(colDiv);

        var cardDiv = document.createElement('div');
        //cardDiv.setAttribute('class', 'card');
        

        var cardBodyDiv = document.createElement('div');
        //cardBodyDiv.setAttribute('class', 'card-body');
        cardDiv.appendChild(cardBodyDiv);

        var form = document.createElement('form');
        form.setAttribute('class', 'form-horizontal');
        
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');

        form.appendChild(CreateTextInput('Device ID:','deviceId', 'Siddharth', formGroup));

        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');

        form.appendChild(CreateTextArea('Description:','description', 'Siddharth', 20,3,1000,formGroup));
        
        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');
        
        var manuSelect = document.createElement('select');
        manuSelect.setAttribute("class", "form-control");
        manuSelect.setAttribute("data-plugin","select2");

        var manuOption = document.createElement('option');
        manuOption.setAttribute("value", "Ak");
        manuOption.innerHTML = "Alaska";
        manuSelect.appendChild(manuOption);

        manuOption = document.createElement('option');
        manuOption.setAttribute("value", "CA");
        manuOption.innerHTML = "California";
        manuSelect.appendChild(manuOption);

        //formGroup.appendChild(manuSelect);
        //form.appendChild(manuSelect);

        //form.appendChild(CreateTextInput('Manufacturer:','manufacturer', 'Siddharth', formGroup));
        
        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');
        form.appendChild(CreateTextInput('Part Number:','partNo', 'Siddharth', formGroup));
        
        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');
        form.appendChild(CreateTextInput('Cutsheet:','cutsheet', 'Siddharth', formGroup));
        
        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');
        form.appendChild(CreateTextInput('Quantity:','quantity', 'Siddharth', formGroup));
        
        cardBodyDiv.appendChild(form);
        cardBodyDiv.appendChild(manuSelect);
        return cardDiv;
    }

    var CreateDataPointsContent = function(data)
    {
        var cardDiv = document.createElement('div');
        //cardDiv.setAttribute('class', 'card');

        var cardBodyDiv = document.createElement('div');
        //cardBodyDiv.setAttribute('class', 'card-body');
        cardDiv.appendChild(cardBodyDiv);

        var form = document.createElement('form');
        form.setAttribute('class', 'form-horizontal');
        
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');
        
        form.appendChild(CreateRadioInput('Type:',['Device','Controller'], 'Device', formGroup));
        
        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');

        var colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-4');
        formGroup.appendChild(CreateTextInput('UI:','ui', 'Sid', colDiv));

        colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-4');
        formGroup.appendChild(CreateTextInput('UO:','uo', 'Sid', colDiv));
        
        colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-4');
        formGroup.appendChild(CreateTextInput('AI:','ai', 'Sid', colDiv));

        form.appendChild(formGroup);

        formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');

        colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-4');
        formGroup.appendChild(CreateTextInput('AO:','ao', 'Sid', colDiv));
        
        colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-4');
        formGroup.appendChild(CreateTextInput('DI:','di', 'Sid', colDiv));
        
        colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-4');
        formGroup.appendChild(CreateTextInput('DO:','do', 'Sid', colDiv));
        
        form.appendChild(formGroup);
        cardBodyDiv.appendChild(form);

        return cardDiv;
    }


    var GetDIDData = function()
    {

    }

    var GetDataPointsData = function()
    {

    }

    var Init = function()
    {
        DIDPanel.GetName();
        
        // <div class="form-group row">
        //     <div class="col-md-6">
        //         <button type="reset" class="btn btn-default btn-lg btn-block">Cancel</button>
        //     </div>
        //     <div class="col-md-6">
        //         <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
        //     </div>
        // </div>

        var data = {}

        var tabs = [{name:'DID', content: CreateDIDContent(data)},{name:'DataPoints', content: CreateDataPointsContent(data)}];
        var tabsContainer =  CreateTabs(tabs)

        var rowDiv = document.createElement('div');
        rowDiv.setAttribute('class','form-group row');
        rowDiv.setAttribute('style','box-sizing:border-box');

        var cancelButtonDiv = document.createElement('div');
        cancelButtonDiv.setAttribute('class','col-md-6');
        cancelButtonDiv.setAttribute('style','box-sizing:border-box');

        var cancelButton = document.createElement('button');
        cancelButton.setAttribute('type','reset');
        cancelButton.setAttribute('class','btn btn-default btn-sm btn-block');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.setAttribute('style','box-sizing:border-box');
        cancelButtonDiv.appendChild(cancelButton);
        

        var submitButtonDiv = document.createElement('div');
        submitButtonDiv.setAttribute('class','col-md-6');
        submitButtonDiv.setAttribute('style','box-sizing:border-box');

        var submitButton = document.createElement('button');
        submitButton.setAttribute('type','submit');
        submitButton.setAttribute('class','btn btn-success btn-sm btn-block');
        submitButton.innerHTML = 'Submit';
        submitButton.setAttribute('style','box-sizing:border-box');

        submitButtonDiv.appendChild(submitButton);

        rowDiv.appendChild(cancelButtonDiv);
        rowDiv.appendChild(submitButtonDiv);

        var topContainerDiv = document.createElement('div');
        topContainerDiv.appendChild(tabsContainer);
        topContainerDiv.appendChild(document.createElement('br'));
        topContainerDiv.appendChild(rowDiv);

        //tabsContainer.appendChild(rowDiv);

        return topContainerDiv;
    }

    this.container = Init();
}

var DIDPanel = (function()
{
    var _deviceIdInput=null;
    var _descriptionInput = null;
    var _manufacturerInput = null;
    var _partNoInput = null;
    var _catSheetInput = null;
    var _quantityInput = null;
    var _panelName = "DID";
    var _container = null;

    var _init = function()
    {
        var cardDiv = document.createElement('div');
        var cardBodyDiv = document.createElement('div');
        //cardBodyDiv.setAttribute('class', 'card-body');
        cardDiv.appendChild(cardBodyDiv);

        var form = document.createElement('form');
        form.setAttribute('class', 'form-horizontal');
        
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');
        _createQuantity(formGroup);
        _createDeviceId(formGroup);

        _createPartNo(form);
        _createDescription(form);
        _createManufacturer(form);
        _createCatSheet(form);
        
        cardBodyDiv.appendChild(form);

        _container = cardDiv;
    }

    var _createQuantity = function(container)
    {
        var quantityLabel = new LabelBuilder()
                                .withId("lblQuantity")
                                .withFor("txtQuantity")
                                .withClass("col-sm-2 form-control-label")
                                .setText("Quantity:")
                                .appendTo(container);

        var inputDiv = document.createElement('div');
        inputDiv.setAttribute("class","col-sm-4");
        
        _quantityInput = new InputBuilder()
                                .withId("txtQuantity")
                                .withType("text")
                                .withClass("form-control")
                                .withName("txtQuantity")
                                .appendTo(inputDiv)

        container.appendChild(inputDiv);
    }

    var _createDeviceId = function(container)
    {
        var deviceIdLabel = new LabelBuilder()
                                .withId("lblDeviceId")
                                .withFor("txtDeviceId")
                                .withClass("col-sm-2 form-control-label")
                                .setText("Device Id:")
                                .appendTo(container);

        var inputDiv = document.createElement('div');
        inputDiv.setAttribute("class","col-sm-4");
        
        _deviceIdInput = new InputBuilder()
                                .withId("txtDeviceId")
                                .withType("text")
                                .withClass("form-control")
                                .withName("txtDeviceId")
                                .appendTo(inputDiv)

        container.appendChild(inputDiv);
                               
    }

    var _createPartNo = function(container)
    {
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');

        var parentWindow = window.parent;
        var addProductPopupDiv = parentWindow.j('#dvAddProductPopup').dialog("option", "dialogClass", "productDialogToggle" );
        var pageMode = null;

        var dialogOpen = function(event, ui)
        {
            productLookupDialogBoxOpened = true;
                //parentWindow.uc_ap_SetPageMode('ENGINEERING')
            pageMode = parentWindow.$get('hfPageMode').value;

            parentWindow.$get('hfPageMode').value = 'ENGINEERING';
            parentWindow.setupView();
            parentWindow.uc_ap_setProductsComboValue(document.getElementById('partNo').value,null)
        }

        var dialogClose = function(event, ui)
        {
            var productData = parentWindow.uc_ap_getData();
            that.productData = productData;

            SetDIDData(productData);
            SetDataPointsData(productData);

            parentWindow.$get('hfPageMode').value=pageMode;
        }

        addProductPopupDiv.on("dialogclose", dialogClose);

        addProductPopupDiv.on("dialogopen", dialogOpen);

        var inputGroup = document.createElement('div');
        inputGroup.setAttribute('class', 'input-group');
        container.appendChild(inputGroup);

        var partNoLabel = new LabelBuilder()
                                .withId("lblPartNo")
                                .withFor("txtPartNo")
                                .withClass("form-control-label")
                                .setText("Part No:")
                                .appendTo(inputGroup);

        _partNoInput = new InputBuilder()
                                .withId("txtPartNo")
                                .withType("text")
                                .withClass("form-control")
                                .withName("txtPartNo")
                                .appendTo(inputGroup)

        var spanDiv = document.createElement('span');
        spanDiv.setAttribute('class', 'input-group-btn');
        spanDiv.setAttribute('style','font-size:12px');

        var searchButtonClick = function()
        {
            addProductPopupDiv.dialog('open');
        }

        var searchButton = new ButtonBuilder()
                                .withId('btnSearch')
                                .withClass('btn btn-primary')
                                .withText('...')
                                .withType('button')
                                .withClick(searchButtonClick)
                                .appendTo(spanDiv);

        
       
        spanDiv.appendChild(searchButton);
        inputGroup.appendChild(spanDiv);
        formGroup.appendChild(inputGroup);
        container.appendChild(formGroup);
    }

    var _createDescription = function(container)
    {
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');

        var descriptionLabel = new LabelBuilder()
                                .withId("desc")
                                .withFor("description")
                                .withClass("col-sm-2 form-control-label")
                                .setText("Description:")
                                .appendTo(formGroup);

        var inputDiv = document.createElement('div');
        inputDiv.setAttribute("class","col-sm-8");
        
        _descriptionInput = new TextAreaBuilder()
                                .withId("description")
                                .withClass("form-control")
                                .withName("description")
                                .withRows(3)
                                .withCols(20)
                                .withMaxlength(1000)
                                .appendTo(inputDiv)

        formGroup.appendChild(inputDiv);

        container.appendChild(formGroup);
    }

    var _createManufacturer = function(container)
    {
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');
        
        var manufacturerLabel = new LabelBuilder()
        .withId("lmanufacturer")
        .withFor("manufacturer")
        .withClass("col-sm-2 form-control-label")
        .setText("Manufacturer:")
        .appendTo(formGroup);

        var inputDiv = document.createElement('div');
        inputDiv.setAttribute("class","col-sm-8");

        _manufacturerInput = new DropDownBuilder()
                .withId("manufacturer")
                .withClass("form-control")
                .withName("manufacturer")
                .appendTo(inputDiv);

        formGroup.appendChild(inputDiv);
        container.appendChild(formGroup);
    }

    var _createCatSheet = function(container)
    {
        var formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group row');

        var catSheetUrlLabel = new LabelBuilder()
        .withId("lblCatSheet")
        .withFor("txtCatSheet")
        .withClass("col-sm-2 form-control-label")
        .setText("Cat Sheet Url:")
        .appendTo(formGroup);

        var inputDiv = document.createElement('div');
        inputDiv.setAttribute("class","col-sm-8");

        _catSheetInput = new InputBuilder()
                .withId("txtCatSheet")
                .withType("url")
                .withClass("form-control")
                .withName("txtCatSheet")
                .appendTo(inputDiv)

        formGroup.appendChild(inputDiv);
        container.appendChild(formGroup);
    }

    _init();

    return {
        SetData: function(didData)
        {
            _deviceIdInput.setValue(didData.deviceId);
            _descriptionInput.setValue(didData.description);
            _manufacturerInput.setValue(didData.manufacturerName);
            _partNoInput.setValue(didData.partNo);
            _catSheetInput.setValue(didData.catSheet);
            _quantityInput.setValue(didData.quantity);
        },
        GetData: function()
        {
            var didData = {};
            didData.deviceId=_deviceIdInput.getValue();
            didData.description=_descriptionInput.getValue();
            didData.manufacturerName=_manufacturerInput.getValue();
            didData.partNo=_partNoInput.getValue();
            didData.catSheet=_catSheetInput.getValue();
            didData.quantity=_quantityInput.getValue();
    
            return didData;
        },
        GetName: function()
        {
            return _panelName;
        },
        GetContainer: function()
        {
            return _container;
        }
    }
}());