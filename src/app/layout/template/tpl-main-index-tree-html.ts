export const tplMainIndexActionHTML = {
  event: ``,
  search: ``
};

export const tplMainIndexTreeHTML =
  `
  <div class="content__title">
  <h1>
    {{pageTitle}}
    <small></small>
  </h1>
  <div>
  ${tplMainIndexActionHTML.event}
  </div>
</div>

<sf #sf mode="search" [schema]="searchSchema" [formData]="mainTableParams" (formSubmit)="st.reset($event)" (formReset)="st.reset(mainTableParams)" class="search-form" [button]="'none'">
  <nz-form-item class="sf-btns">
    <nz-form-control class="ant-form-item-control-wrapper">
      <div class="ant-form-item-control">
        <button type="submit" nz-button [nzType]="'primary'">查询</button>
      </div>
    </nz-form-control>
  </nz-form-item>
  ${tplMainIndexActionHTML.search}
  <nz-form-item class="sf-btns">
    <nz-form-control class="ant-form-item-control-wrapper">
      <div class="ant-form-item-control">
        <button nz-button (click)="caseFunc.exportXlsFromServer()">导出</button>
      </div>
    </nz-form-control>
  </nz-form-item>
</sf>

<div nz-row nzGutter="16">
  <div nz-col nzSpan="4">
    <nz-card>
      <p>
        <nz-tree [(ngModel)]="treeCompany" [nzShowLine]="true" [nzShowExpand]="'false'" [nzDefaultExpandedKeys]="treeCompanyExpandKeys" (nzClick)="mouseTreeAction('click',$event)" (nzContextMenu)="mouseTreeAction('click',$event)"
          [ngModelOptions]="{standalone: true}">
        </nz-tree>
      </p>
    </nz-card>
  </div>
  <div nz-col nzSpan="20">
    <simple-table #st class="simple-table" [data]="primaryURL" [columns]="mainTableColumns" [extraParams]="mainTableParams"></simple-table>
  </div>
</div>


`;
