<h1>ng4-paginator</h1>

This is an angular 4 module that allows for adding a paginator to an existing angular app.

<h2>How To Use Module</h2>
<u>
<li>You need to add a dependency in your package.json to "ng4-paginator"</li>
<li>In your app module add Ng4PaginatorModule to the imports:[]</li> 
<li>add an import in your app module
<ul> 
<li>import { Ng4PaginatorModule } from 'ng4-paginator';</li>
</ul>
</li>
<li>In your component template add the following block:</li>
<i>
<p>
&lt;ng4-paginator totalRecords="this is the total number of records" pagesPerGroup="this is number of pages displayed at in the paginator" recordsPerPage="this is the number of records per page" (currentPageChanged)="onPageChanged($event)"&gt;&lt;/ng4-paginator&gt;
</p>
</i><br/>
<li>In your component implement the onPageChanged($event) method that captures the page number user has selected.</li>
</u>
<h2>How To Build Module</h2>
In order to build this code just browse to the directory where you've saved it and run "npm run build"

