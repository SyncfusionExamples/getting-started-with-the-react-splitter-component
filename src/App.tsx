import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';

function App() {
  const leftPane=()=>{
    return(
      <div>
        <h2>Data Grid</h2>
        The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format.
      </div>
    )
  }
  const middlePane=()=>{
    return(
      <div className='nested'>Middle Content</div>
    )
  }
  const listData = [
    {
        id: '01', text: 'Music', icon: 'folder',
        child: [
            { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }
        ]
    },
    {
        id: '02', text: 'Videos', icon: 'folder',
        child: [
            { id: '02-01', text: 'Naturals.mp4', icon: 'file' },
            { id: '02-02', text: 'Wild.mpeg', icon: 'file' },
        ]
    },
    {
        id: '03', text: 'Documents', icon: 'folder',
        child: [
            { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },
            { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },
            { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },
            { id: '03-04', text: 'Social Network.pdf', icon: 'file' },
            { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },
        ]
    },
    {
        id: '04', text: 'Pictures', icon: 'folder',
        child: [
            {
                id: '04-01', text: 'Camera Roll', icon: 'folder',
                child: [
                    { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },
                    { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },
                    { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }
                ]
            },
            {
                id: '04-02', text: 'Wind.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Stone.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Home.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Bridge.png', icon: 'file'
            }
        ]
    },
    {
        id: '05', text: 'Downloads', icon: 'folder',
        child: [
            { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },
            { id: '05-02', text: 'Tutorials.zip', icon: 'file' },
            { id: '05-03', text: 'Game.exe', icon: 'file' },
            { id: '05-04', text: 'TypeScript.7z', icon: 'file' },
        ]
    },
  ]
  const listContent=()=>{
    return(
      <ListViewComponent dataSource={listData}
        showHeader={true}
        headerTitle="Folders"
        showIcon={true}
        fields={{iconCss:"icon"}}
        ></ListViewComponent>
    )
  }
  let splitterObj: SplitterComponent;
  let innerSplitterObj: SplitterComponent
  const onCreated=()=>{
    let parentSplitter = splitterObj.element.querySelectorAll(".e-pane")[1];
    parentSplitter.appendChild(innerSplitterObj.element);
  }
  return (
    <div className="App">
      <SplitterComponent ref={((s:SplitterComponent)=>splitterObj=s)}>
        <PanesDirective>
          <PaneDirective size='25%' content={leftPane} collapsible={true}/>
          <PaneDirective size='50%' content={middlePane} collapsible={true} collapsed={true}/>
          <PaneDirective content={listContent} resizable={false}/>
        </PanesDirective>
      </SplitterComponent>
      <SplitterComponent orientation='Vertical' ref={((s:SplitterComponent)=>innerSplitterObj=s)}
        created={onCreated}>
        <PanesDirective>
          <PaneDirective content="<div class='nested'>Nested Pane</div>"/>
        </PanesDirective>
      </SplitterComponent>
    </div>
  );
}

export default App;
