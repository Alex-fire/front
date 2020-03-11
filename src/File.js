import React, { Component } from "react";

export class File extends Component {

    render(){
        return (
            <div>
                <form method="POST" encType="multipart/form-data" action="/api/upload">
                    <table>
                        <tr>
                            <td>File to upload:</td>
                            <td><input type="file" name="file"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Upload"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default File
