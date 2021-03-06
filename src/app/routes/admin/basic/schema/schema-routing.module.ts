import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core';

import { SchemaComponent } from './schema.component';
import { SchemaDemoComponent } from './schema/index.component';
import { SchemaShowComponent } from './schema/modal/show.component';
import { SchemaEditComponent } from './schema/modal/edit.component';
import { SchemaFormEditComponent } from './schema/edit/edit.component';
import { SchemaFormEditxComponent } from './schema/editx/edit.component';

const routes: Routes = [
    {
        path: '',
        component: SchemaComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'schema-demo', pathMatch: 'full' },
            { path: 'schema-demo', component: SchemaDemoComponent }
        ]
    },
];

export const entryComponents = [
    SchemaFormEditComponent,
    SchemaFormEditxComponent,
    SchemaShowComponent,
    SchemaEditComponent
];

export const routedComponents = [
    SchemaDemoComponent,
    SchemaComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SchemaRoutingModule { }

