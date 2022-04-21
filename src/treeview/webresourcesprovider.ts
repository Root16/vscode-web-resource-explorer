import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { WebResource as WebResource } from './webresource';

export class WebResourcesProvider implements vscode.TreeDataProvider<WebResource> {
    constructor(private webresourceNames: string[]) { }

    getTreeItem(element: WebResource): vscode.TreeItem {
        return element;
    }


    getChildren(element?: WebResource): Thenable<WebResource[]> {
        if (element) {
            //I think we're at the end of a branch of the tree? Just return nothing
            return Promise.resolve([]);
        } else {
            //I think we're at the root of the tree? Just return the list

            return Promise.resolve(this.webresourceNames.map(n => new WebResource(n, true,
                vscode.TreeItemCollapsibleState.Collapsed
            )));
        }
    }
}
