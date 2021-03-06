import GraphData from '../../../shared/pojos/graphdata'
import { Action } from '@ngrx/store'
import { ADD_GRAPH_DATA } from '../index'
import { FORMAT_DDMMMYYYY, FORMAT_DDMMYY, getFomattedDate } from '../../../shared/utils/datetimeutil'

export default class AddGraphDataAction implements Action {
  readonly type = ADD_GRAPH_DATA
  public payload: GraphData

  constructor(newData: string) {
    let dataArr = newData.split(',')
    this.payload = new GraphData()
    this.payload.timestamp = parseInt(dataArr[0])
    this.payload.date = getFomattedDate(this.payload.timestamp, FORMAT_DDMMYY)
    this.payload.value = parseInt(dataArr[4])
  }
}