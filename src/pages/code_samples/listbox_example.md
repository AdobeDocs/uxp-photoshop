# Making a Listbox

A listbox is a common UI element that is not implemented in native Photoshop controls nor Spectrum-CSS controls.

But with some creative HTML, CSS and JavaScript, you can make a `sp-menu` component look and (mostly) act like a listbox.

````html
<sp-menu id="mylistbox" class="listbox" style="height: 300px; margin-left:20px;color:white; width:220px; border:1px white solid; overflow: auto">
    <sp-menu-item selected>My first project</sp-menu-item>
    <sp-menu-item projectid="9998888">Project number 2</sp-menu-item>
<sp-menu>
````
                       
````js
function listboxChange(evt) {
    const id = evt.target.options[evt.target.selectedIndex].getAttribute('row_id');
    const value = evt.target.value;
    // id will be null if if "row_id" isn't defined on the <sp-menu-item>
    console log(`row_id is ${row_id} and value is ${value});
}
````
**FULL EXAMPLE TBD**