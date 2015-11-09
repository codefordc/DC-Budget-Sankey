// Copyright (c) 2015, James Haley
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the <organization> nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
d3.mytimer = function(e, t, r) {
var n = arguments.length;
2 > n && (t = 0), 3 > n && (r = Date.now());
var a = r + t,
    o = {
        c: e,
        t: a,
        f: !1,
        n: null
    };
d3_timer_queueTail ? d3_timer_queueTail.n = o : d3_timer_queueHead = o, d3_timer_queueTail = o, d3_timer_interval || (d3_timer_timeout = clearTimeout(d3_timer_timeout), d3_timer_interval = 1, d3_timer_frame(d3_timer_step))
}, myData = [
{"source":"General Fund","target":"Office of Public Safety and Justice","value":22505371}
,
{"source":"Office of Public Safety and Justice","target":"Captive Insurance Agency","value":22505371}
,
{"source":"General Fund","target":"Legislative","value":4240984}
,
{"source":"Legislative","target":"Office of the District of Columbia Auditor","value":4240984}
,
{"source":"General Fund","target":"Legislative","value":924012}
,
{"source":"Legislative","target":"Advisory Neighborhood Commissions","value":924012}
,
{"source":"General Fund","target":"Independent","value":50000}
,
{"source":"Independent","target":"Uniform Law Commission","value":50000}
,
{"source":"General Fund","target":"Mayor","value":9321693}
,
{"source":"Mayor","target":"Mayor Office","value":9321693}
,
{"source":"General Fund","target":"Mayor","value":0}
,
{"source":"Mayor","target":"Mayor's Office of Legal Counsel","value":0}
,
{"source":"General Fund","target":"Mayor","value":0}
,
{"source":"Mayor","target":"Office of the Senior Advisor","value":0}
,
{"source":"General Fund","target":"Mayor","value":3914686}
,
{"source":"Mayor","target":"Secretary Office","value":3914686}
,
{"source":"General Fund","target":"Mayor","value":3713952}
,
{"source":"Mayor","target":"City Administrator Office","value":3713952}
,
{"source":"General Fund","target":"Office of Greater Economic Opportunity","value":0}
,
{"source":"Office of Greater Economic Opportunity","target":"Deputy Mayor for Greater Economic Opportunity","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":3124189}
,
{"source":"Office of Public Safety and Justice","target":"D.C. Office of Risk Management","value":3124189}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":8676702}
,
{"source":"Office of Health and  Human Services","target":"D.C. Department of Human Resources","value":8676702}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":1043466}
,
{"source":"Office of Health and  Human Services","target":"Office of Disability Rights","value":1043466}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":1600145}
,
{"source":"Office of Public Safety and Justice","target":"Captive Insurance Agency","value":1600145}
,
{"source":"General Fund","target":"Chief Financial Officer Office","value":21708887}
,
{"source":"Chief Financial Officer Office","target":"Office of Finance and Resource Management","value":21708887}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":17644855}
,
{"source":"Office of Public Safety and Justice","target":"Office of Contracting and Procurement","value":17644855}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":70115819}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Chief Technology Officer","value":70115819}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":1426098}
,
{"source":"Office of Public Safety and Justice","target":"Contract Appeals Board","value":1426098}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":307184405}
,
{"source":"Office of Public Safety and Justice","target":"Department of General Services","value":307184405}
,
{"source":"General Fund","target":"Charter Independent","value":7239921}
,
{"source":"Charter Independent","target":"Board of Elections","value":7239921}
,
{"source":"General Fund","target":"Charter Independent","value":2798476}
,
{"source":"Charter Independent","target":"Office of Campaign Finance","value":2798476}
,
{"source":"General Fund","target":"Independent","value":1253206}
,
{"source":"Independent","target":"Public Employee Relations Board","value":1253206}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Municipal Facilities: Non-Capital","value":0}
,
{"source":"General Fund","target":"Independent","value":1570426}
,
{"source":"Independent","target":"Office of Employee Appeals","value":1570426}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"Access to Justice","value":0}
,
{"source":"General Fund","target":"Regional","value":449727}
,
{"source":"Regional","target":"Metropolitan Washington Council of Governments","value":449727}
,
{"source":"General Fund","target":"Mayor","value":67830806}
,
{"source":"Mayor","target":"Office of the Attorney General","value":67830806}
,
{"source":"General Fund","target":"Independent","value":1497583}
,
{"source":"Independent","target":"D.C. Board of Ethics and Government Accountability","value":1497583}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"Innovation Fund","value":0}
,
{"source":"General Fund","target":"Office of Senior Advisor","value":225800}
,
{"source":"Office of Senior Advisor","target":"Statehood Initiative Agency","value":225800}
,
{"source":"General Fund","target":"Mayor","value":14347682}
,
{"source":"Mayor","target":"Office of the Inspector General","value":14347682}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"Tax Revision Commission","value":0}
,
{"source":"General Fund","target":"Chief Financial Officer Office","value":158203700}
,
{"source":"Chief Financial Officer Office","target":"Office of the Chief Financial Officer","value":158203700}
,
{"source":"General Fund","target":"Chief Financial Officer Office","value":0}
,
{"source":"Chief Financial Officer Office","target":"Section 103 Judgments - Government Direction and Support","value":0}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":41137472}
,
{"source":"Office of Planning  and Economic Development","target":"Office of the Deputy Mayor for Planning and Economic Development","value":41137472}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":9438827}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Planning","value":9438827}
,
{"source":"General Fund","target":"Office of Greater Economic Opportunity","value":8985254}
,
{"source":"Office of Greater Economic Opportunity","target":"Department of Small and Local Business Development","value":8985254}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":3699820}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Motion Picture and Television Development","value":3699820}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Film, Television, and Entertainment","value":0}
,
{"source":"General Fund","target":"Charter Independent","value":2704735}
,
{"source":"Charter Independent","target":"Office of Zoning","value":2704735}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":21625092}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Housing and Community Development","value":21625092}
,
{"source":"General Fund","target":"Office of Greater Economic Opportunity","value":89271573}
,
{"source":"Office of Greater Economic Opportunity","target":"Department of Employment Services","value":89271573}
,
{"source":"General Fund","target":"Independent","value":1749390}
,
{"source":"Independent","target":"Real Property Tax Appeals Commission","value":1749390}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":47701358}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Consumer and Regulatory Affairs","value":47701358}
,
{"source":"General Fund","target":"Independent","value":2488012}
,
{"source":"Independent","target":"Office of the Tenant Advocate","value":2488012}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":15802585}
,
{"source":"Office of Planning  and Economic Development","target":"Commission on the Arts and Humanities","value":15802585}
,
{"source":"General Fund","target":"Independent","value":7445930}
,
{"source":"Independent","target":"Alcoholic Beverage Regulation Administration","value":7445930}
,
{"source":"General Fund","target":"Charter Independent","value":12159253}
,
{"source":"Charter Independent","target":"Public Service Commission","value":12159253}
,
{"source":"General Fund","target":"Independent","value":6911031}
,
{"source":"Independent","target":"Office of the People's Counsel","value":6911031}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":22117944}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Insurance, Securities, and Banking","value":22117944}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":9444066}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Cable Television","value":9444066}
,
{"source":"General Fund","target":"Independent","value":45963276}
,
{"source":"Independent","target":"Housing Authority Subsidy","value":45963276}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"Housing Production Trust Fund Subsidy","value":0}
,
{"source":"General Fund","target":"Independent","value":25000000}
,
{"source":"Independent","target":"Business Improvement Districts Transfer","value":25000000}
,
{"source":"General Fund","target":"Chief Financial Officer Office","value":0}
,
{"source":"Chief Financial Officer Office","target":"Section 103 Judgements-Econ Dev & Regul","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":484869964}
,
{"source":"Office of Public Safety and Justice","target":"Metropolitan Police Department","value":484869964}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":203082924}
,
{"source":"Office of Public Safety and Justice","target":"Fire and Emergency Medical Services Department","value":203082924}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":111330000}
,
{"source":"Office of Public Safety and Justice","target":"Police Officers' and Fire Fighters' Retirement System","value":111330000}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":151409857}
,
{"source":"Office of Public Safety and Justice","target":"Department of Corrections","value":151409857}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":5065881}
,
{"source":"Office of Public Safety and Justice","target":"District of Columbia National Guard","value":5065881}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":2085250}
,
{"source":"Office of Public Safety and Justice","target":"Homeland Security and Emergency Management Agency","value":2085250}
,
{"source":"General Fund","target":"Judicial","value":0}
,
{"source":"Judicial","target":"Judicial Nomination Commission","value":0}
,
{"source":"General Fund","target":"Independent","value":2241298}
,
{"source":"Independent","target":"Office of Police Complaints","value":2241298}
,
{"source":"General Fund","target":"Judicial","value":1401315}
,
{"source":"Judicial","target":"District of Columbia Sentencing and Criminal Code Revision Commission","value":1401315}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":9518949}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Chief Medical Examiner","value":9518949}
,
{"source":"General Fund","target":"Independent","value":8703036}
,
{"source":"Independent","target":"Office of Administrative Hearings","value":8703036}
,
{"source":"General Fund","target":"Independent","value":526107}
,
{"source":"Independent","target":"Criminal Justice Coordinating Council","value":526107}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":43481430}
,
{"source":"Office of Public Safety and Justice","target":"Office of Unified Communications","value":43481430}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Forensic Laboratory Technician Training Program","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":14471514}
,
{"source":"Office of Public Safety and Justice","target":"Department of Forensic Sciences","value":14471514}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":21878355}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Deputy Mayor for Public Safety and Justice","value":21878355}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of Victim Services","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Corrections Information Council","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of Victim Services and Justice Grants","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Section 103 Judgments-Public Safety and Justice","value":0}
,
{"source":"General Fund","target":"Office of Education","value":709688546}
,
{"source":"Office of Education","target":"District of Columbia Public Schools","value":709688546}
,
{"source":"General Fund","target":"Office of Education","value":39513000}
,
{"source":"Office of Education","target":"Teachers' Retirement System","value":39513000}
,
{"source":"General Fund","target":"Office of Education","value":142544861}
,
{"source":"Office of Education","target":"Office of the State Superintendent of Education","value":142544861}
,
{"source":"General Fund","target":"Office of Education","value":675407996}
,
{"source":"Office of Education","target":"District of Columbia Public Charter Schools","value":675407996}
,
{"source":"General Fund","target":"Office of Education","value":72457573}
,
{"source":"Office of Education","target":"University of the District of Columbia Subsidy Account","value":72457573}
,
{"source":"General Fund","target":"Office of Education","value":56824836}
,
{"source":"Office of Education","target":"District of Columbia Public Library","value":56824836}
,
{"source":"General Fund","target":"Independent","value":6741290}
,
{"source":"Independent","target":"District of Columbia Public Charter School Board","value":6741290}
,
{"source":"General Fund","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"Office of Public Education Facilities Modernization","value":0}
,
{"source":"General Fund","target":"Office of Education","value":74339737}
,
{"source":"Office of Education","target":"Non-Public Tuition","value":74339737}
,
{"source":"General Fund","target":"Office of Education","value":93562426}
,
{"source":"Office of Education","target":"Special Education Transportation","value":93562426}
,
{"source":"General Fund","target":"Independent","value":1151555}
,
{"source":"Independent","target":"D.C. State Board of Education","value":1151555}
,
{"source":"General Fund","target":"Office of Education","value":6917249}
,
{"source":"Office of Education","target":"Office of the Deputy Mayor for Education","value":6917249}
,
{"source":"General Fund","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"Section 103 Judgments-Public Education System","value":0}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":237747150}
,
{"source":"Office of Health and  Human Services","target":"Department of Human Services","value":237747150}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":169577877}
,
{"source":"Office of Health and  Human Services","target":"Child and Family Services Agency","value":169577877}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":235445086}
,
{"source":"Office of Health and  Human Services","target":"Department of Behavioral Health","value":235445086}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":91995408}
,
{"source":"Office of Health and  Human Services","target":"Department of Health","value":91995408}
,
{"source":"General Fund","target":"Office of Education","value":43296683}
,
{"source":"Office of Education","target":"Department of Parks and Recreation","value":43296683}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":32973922}
,
{"source":"Office of Health and  Human Services","target":"D.C. Office on Aging","value":32973922}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":6887000}
,
{"source":"Office of Health and  Human Services","target":"Unemployment Compensation Fund","value":6887000}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":20221002}
,
{"source":"Office of Health and  Human Services","target":"Employees' Compensation Fund","value":20221002}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":3137909}
,
{"source":"Office of Health and  Human Services","target":"Office of Human Rights","value":3137909}
,
{"source":"General Fund","target":"Office of the Chief of Staff","value":2768724}
,
{"source":"Office of the Chief of Staff","target":"Office on Latino Affairs","value":2768724}
,
{"source":"General Fund","target":"Independent","value":3000000}
,
{"source":"Independent","target":"Children and Youth Investment Collaborative","value":3000000}
,
{"source":"General Fund","target":"Office of the Chief of Staff","value":942646}
,
{"source":"Office of the Chief of Staff","target":"Office on Asian and Pacific Islander Affairs","value":942646}
,
{"source":"General Fund","target":"Office of the Chief of Staff","value":415595}
,
{"source":"Office of the Chief of Staff","target":"Office of Veterans' Affairs","value":415595}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":105898578}
,
{"source":"Office of Health and  Human Services","target":"Department of Youth Rehabilitation Services","value":105898578}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":123479895}
,
{"source":"Office of Health and  Human Services","target":"Department on Disability Services","value":123479895}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":786063165}
,
{"source":"Office of Health and  Human Services","target":"Department of Health Care Finance","value":786063165}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Not-for-Profit Hospital Corp. Subsidy","value":0}
,
{"source":"General Fund","target":"Independent","value":28751244}
,
{"source":"Independent","target":"D.C. Health Benefit Exchange Subsidy","value":28751244}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":1171975}
,
{"source":"Office of Health and  Human Services","target":"Office of the Deputy Mayor for Health and Human Services","value":1171975}
,
{"source":"General Fund","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Section 103 Judgements-Human Services","value":0}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":128108711}
,
{"source":"Office of Public Safety and Justice","target":"Department of Public Works","value":128108711}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":103155794}
,
{"source":"Office of Public Safety and Justice","target":"District Department of Transportation","value":103155794}
,
{"source":"General Fund","target":"Office of Public Safety and Justice","value":38847765}
,
{"source":"Office of Public Safety and Justice","target":"Department of Motor Vehicles","value":38847765}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":79314289}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Energy and Environment","value":79314289}
,
{"source":"General Fund","target":"Office of Planning  and Economic Development","value":8269714}
,
{"source":"Office of Planning  and Economic Development","target":"D.C. Taxicab Commission","value":8269714}
,
{"source":"General Fund","target":"Regional","value":126569}
,
{"source":"Regional","target":"Washington Metropolitan Area Transit Commission","value":126569}
,
{"source":"General Fund","target":"Regional","value":330520281}
,
{"source":"Regional","target":"Washington Metropolitan Area Transit Authority","value":330520281}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"School Transit Subsidy","value":0}
,
{"source":"General Fund","target":"Debt","value":600694280}
,
{"source":"Debt","target":"Repayment of Loans and Interest","value":600694280}
,
{"source":"General Fund","target":"Debt","value":2500000}
,
{"source":"Debt","target":"Repayment of Interest on Short-Term Borrowing","value":2500000}
,
{"source":"General Fund","target":"Debt","value":22670075}
,
{"source":"Debt","target":"Certificates of Participation","value":22670075}
,
{"source":"General Fund","target":"Debt","value":6000000}
,
{"source":"Debt","target":"Debt Service - Issuance Costs","value":6000000}
,
{"source":"General Fund","target":"Independent","value":11411712}
,
{"source":"Independent","target":"Schools Modernization Fund","value":11411712}
,
{"source":"General Fund","target":"Debt","value":7839189}
,
{"source":"Debt","target":"Repayment of Revenue Bonds","value":7839189}
,
{"source":"General Fund","target":"Debt","value":21292448}
,
{"source":"Debt","target":"Settlements and Judgments","value":21292448}
,
{"source":"General Fund","target":"Independent","value":4469127}
,
{"source":"Independent","target":"John A. Wilson Building Fund","value":4469127}
,
{"source":"General Fund","target":"Independent","value":42052487}
,
{"source":"Independent","target":"Workforce Investments","value":42052487}
,
{"source":"General Fund","target":"Independent","value":18653391}
,
{"source":"Independent","target":"Non-Departmental","value":18653391}
,
{"source":"General Fund","target":"Independent","value":51548347}
,
{"source":"Independent","target":"Master Equipment Lease/Purchase Program","value":51548347}
,
{"source":"General Fund","target":"Independent","value":28936729}
,
{"source":"Independent","target":"Pay-As-You-Go Capital Fund","value":28936729}
,
{"source":"General Fund","target":"Independent","value":91400000}
,
{"source":"Independent","target":"District Retiree Health Contribution","value":91400000}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"Baseball Dedicated Tax Transfer","value":0}
,
{"source":"General Fund","target":"Independent","value":37685032}
,
{"source":"Independent","target":"Highway Transportation Fund Transfers","value":37685032}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"Inaugural Expenses","value":0}
,
{"source":"General Fund","target":"Independent","value":115719000}
,
{"source":"Independent","target":"Convention Center Transfer-Dedicated Taxes","value":115719000}
,
{"source":"General Fund","target":"Independent","value":0}
,
{"source":"Independent","target":"TIF and Pilot Transfer - Dedicated Taxes","value":0}
,
{"source":"Federal Resources","target":"Mayor","value":2994707}
,
{"source":"Mayor","target":"Mayor Office","value":2994707}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":536097}
,
{"source":"Office of Health and  Human Services","target":"Office of Disability Rights","value":536097}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Chief Technology Officer","value":0}
,
{"source":"Federal Resources","target":"Independent","value":0}
,
{"source":"Independent","target":"Board of Elections","value":0}
,
{"source":"Federal Resources","target":"Attorney General for the District of Columbia","value":21202251}
,
{"source":"Attorney General for the District of Columbia","target":"Office of the Attorney General","value":21202251}
,
{"source":"Federal Resources","target":"Inspector General Office","value":2572202}
,
{"source":"Inspector General Office","target":"Office of the Inspector General","value":2572202}
,
{"source":"Federal Resources","target":"Chief Financial Officer Office","value":525000}
,
{"source":"Chief Financial Officer Office","target":"Office of the Chief Financial Officer ","value":525000}
,
{"source":"Federal Resources","target":"Office of Planning  and Economic Development","value":1800000}
,
{"source":"Office of Planning  and Economic Development","target":"Office of the Deputy Mayor for Planning and Economic Development","value":1800000}
,
{"source":"Federal Resources","target":"Office of Planning  and Economic Development","value":509000}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Planning","value":509000}
,
{"source":"Federal Resources","target":"Office of Greater Economic Opportunity","value":460693}
,
{"source":"Office of Greater Economic Opportunity","target":"Department of Small and Local Business Development","value":460693}
,
{"source":"Federal Resources","target":"Office of Planning  and Economic Development","value":41354299}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Housing and Community Development","value":41354299}
,
{"source":"Federal Resources","target":"Office of Greater Economic Opportunity","value":61413736}
,
{"source":"Office of Greater Economic Opportunity","target":"Department of Employment Services","value":61413736}
,
{"source":"Federal Resources","target":"Office of Planning  and Economic Development","value":657500}
,
{"source":"Office of Planning  and Economic Development","target":"Commission on the Arts and Humanities","value":657500}
,
{"source":"Federal Resources","target":"Charter Independent","value":367253}
,
{"source":"Charter Independent","target":"Public Service Commission","value":367253}
,
{"source":"Federal Resources","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Insurance, Securities, and Banking","value":0}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":4010029}
,
{"source":"Office of Public Safety and Justice","target":"Metropolitan Police Department","value":4010029}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":1637729}
,
{"source":"Office of Public Safety and Justice","target":"Fire and Emergency Medical Services Department","value":1637729}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Department of Corrections","value":0}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":7638527}
,
{"source":"Office of Public Safety and Justice","target":"District of Columbia National Guard","value":7638527}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":107467357}
,
{"source":"Office of Public Safety and Justice","target":"Homeland Security and Emergency Management Agency","value":107467357}
,
{"source":"Federal Resources","target":"Judicial","value":295000}
,
{"source":"Judicial","target":"Commission on Judicial Disabilities and Tenure","value":295000}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":270000}
,
{"source":"Office of Public Safety and Justice","target":"Judicial Nomination Commission","value":270000}
,
{"source":"Federal Resources","target":"Independent","value":60000}
,
{"source":"Independent","target":"Office of Administrative Hearings","value":60000}
,
{"source":"Federal Resources","target":"Independent","value":1900000}
,
{"source":"Independent","target":"Criminal Justice Coordinating Council","value":1900000}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Forensic Laboratory Technician Training Program","value":0}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":759042}
,
{"source":"Office of Public Safety and Justice","target":"Department of Forensic Sciences","value":759042}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":8179371}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Deputy Mayor for Public Safety and Justice","value":8179371}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of Victim Services","value":0}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of Victim Services and Justice Grants","value":0}
,
{"source":"Federal Resources","target":"Office of Education","value":53458045}
,
{"source":"Office of Education","target":"District of Columbia Public Schools","value":53458045}
,
{"source":"Federal Resources","target":"Office of Education","value":255067626}
,
{"source":"Office of Education","target":"Office of the State Superintendent of Education","value":255067626}
,
{"source":"Federal Resources","target":"Office of Education","value":903472}
,
{"source":"Office of Education","target":"District of Columbia Public Library","value":903472}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":170977458}
,
{"source":"Office of Health and  Human Services","target":"Department of Human Services","value":170977458}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":65555385}
,
{"source":"Office of Health and  Human Services","target":"Child and Family Services Agency","value":65555385}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":22039328}
,
{"source":"Office of Health and  Human Services","target":"Department of Behavioral Health","value":22039328}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":131218633}
,
{"source":"Office of Health and  Human Services","target":"Department of Health","value":131218633}
,
{"source":"Federal Resources","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"Department of Parks and Recreation","value":0}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":7735721}
,
{"source":"Office of Health and  Human Services","target":"D.C. Office on Aging","value":7735721}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":267000}
,
{"source":"Office of Health and  Human Services","target":"Office of Human Rights","value":267000}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Department of Youth Rehabilitation Services","value":0}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":34510369}
,
{"source":"Office of Health and  Human Services","target":"Department on Disability Services","value":34510369}
,
{"source":"Federal Resources","target":"Office of Health and  Human Services","value":2049018070}
,
{"source":"Office of Health and  Human Services","target":"Department of Health Care Finance","value":2049018070}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":3610000}
,
{"source":"Office of Public Safety and Justice","target":"District Department of Transportation","value":3610000}
,
{"source":"Federal Resources","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Department of Motor Vehicles","value":0}
,
{"source":"Federal Resources","target":"Office of Planning  and Economic Development","value":24381969}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Energy and Environment","value":24381969}
,
{"source":"Federal Resources","target":"Regional","value":0}
,
{"source":"Regional","target":"Washington Metropolitan Area Transit Authority","value":0}
,
{"source":"Federal Resources","target":"Debt","value":0}
,
{"source":"Debt","target":"Repayment of Loans and Interest","value":0}
,
{"source":"Federal Resources","target":"Chief Financial Officer Office","value":12500000}
,
{"source":"Chief Financial Officer Office","target":"Emergency Planning and Security Fund","value":12500000}
,
{"source":"Intra-District Funds","target":"Legislative","value":0}
,
{"source":"Legislative","target":"Council of the District of Columbia","value":0}
,
{"source":"Intra-District Funds","target":"Mayor","value":0}
,
{"source":"Mayor","target":"Mayor Office","value":0}
,
{"source":"Intra-District Funds","target":"Mayor","value":0}
,
{"source":"Mayor","target":"Office of the Secretary ","value":0}
,
{"source":"Intra-District Funds","target":"Mayor","value":0}
,
{"source":"Mayor","target":"Office of the City Administrator","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Chief Technology Officer","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Department of General Services","value":0}
,
{"source":"Intra-District Funds","target":"Attorney General for the District of Columbia","value":390903}
,
{"source":"Attorney General for the District of Columbia","target":"Office of the Attorney General","value":390903}
,
{"source":"Intra-District Funds","target":"Chief Financial Officer Office","value":0}
,
{"source":"Chief Financial Officer Office","target":"Office of the Chief Financial Officer","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":1000}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Planning","value":1000}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Housing and Community Development","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":80000}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Employment Services","value":80000}
,
{"source":"Intra-District Funds","target":"Independent","value":22000}
,
{"source":"Independent","target":"Public Service Commission","value":22000}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Insurance, Securities, and Banking","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Metropolitan Police Department","value":0}
,
{"source":"Intra-District Funds","target":"Independent","value":0}
,
{"source":"Independent","target":"Office of Police Complaints","value":0}
,
{"source":"Intra-District Funds","target":"Independent","value":0}
,
{"source":"Independent","target":"Criminal Justice Coordinating Council","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Deputy Mayor for Public Safety and Justice","value":0}
,
{"source":"Intra-District Funds","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"District of Columbia Public Schools","value":0}
,
{"source":"Intra-District Funds","target":"Office of Education","value":117147}
,
{"source":"Office of Education","target":"Office of the State Superintendent of Education","value":117147}
,
{"source":"Intra-District Funds","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"District of Columbia Public Library","value":0}
,
{"source":"Intra-District Funds","target":"Independent","value":0}
,
{"source":"Independent","target":"D.C. State Board of Education","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Department of Human Services","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":40977}
,
{"source":"Office of Health and  Human Services","target":"Child and Family Services Agency","value":40977}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":472075}
,
{"source":"Office of Health and  Human Services","target":"Department of Behavioral Health","value":472075}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Department of Health","value":0}
,
{"source":"Intra-District Funds","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"Department of Parks and Recreation","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"D.C. Office on Aging","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Office of Human Rights","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":10000}
,
{"source":"Office of Health and  Human Services","target":"Department on Disability Services","value":10000}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Department of Health Care Finance","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"District Department of Transportation","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":995000}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Energy and Environment","value":995000}
,
{"source":"Intra-District Funds","target":"Legislative","value":69720}
,
{"source":"Legislative","target":"Council of the District of Columbia","value":69720}
,
{"source":"Intra-District Funds","target":"Legislative","value":0}
,
{"source":"Legislative","target":"Office of the District of Columbia Auditor","value":0}
,
{"source":"Intra-District Funds","target":"Mayor","value":504023}
,
{"source":"Mayor","target":"Mayor Office","value":504023}
,
{"source":"Intra-District Funds","target":"Mayor","value":338934}
,
{"source":"Mayor","target":"Office of the City Administrator","value":338934}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"D.C. Office of Risk Management","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":4350151}
,
{"source":"Office of Health and  Human Services","target":"D.C. Department of Human Resources","value":4350151}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":70000}
,
{"source":"Office of Health and  Human Services","target":"Office of Disability Rights","value":70000}
,
{"source":"Intra-District Funds","target":"Chief Financial Officer Office","value":13638643}
,
{"source":"Chief Financial Officer Office","target":"Office of Finance and Resource Management","value":13638643}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of Contracting and Procurement","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":29927165}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Chief Technology Officer","value":29927165}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":132389212}
,
{"source":"Office of Public Safety and Justice","target":"Department of General Services","value":132389212}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Municipal Facilities: Non-Capital","value":0}
,
{"source":"Intra-District Funds","target":"Attorney General for the District of Columbia","value":20029769}
,
{"source":"Attorney General for the District of Columbia","target":"Office of the Attorney General","value":20029769}
,
{"source":"Intra-District Funds","target":"Inspector General Office","value":0}
,
{"source":"Inspector General Office","target":"Office of the Inspector General","value":0}
,
{"source":"Intra-District Funds","target":"Chief Financial Officer Office","value":7618877}
,
{"source":"Chief Financial Officer Office","target":"Office of the Chief Financial Officer","value":7618877}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":443890}
,
{"source":"Office of Planning  and Economic Development","target":"Office of the Deputy Mayor for Planning and Economic Development","value":443890}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Planning","value":0}
,
{"source":"Intra-District Funds","target":"Office of Greater Economic Opportunity","value":0}
,
{"source":"Office of Greater Economic Opportunity","target":"Department of Small and Local Business Development","value":0}
,
{"source":"Intra-District Funds","target":"Independent","value":24000}
,
{"source":"Independent","target":"Office of Zoning","value":24000}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":133886279}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Housing and Community Development","value":133886279}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Employment Services","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Consumer and Regulatory Affairs","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Office of the Tenant Advocate","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Commission on the Arts and Humanities","value":0}
,
{"source":"Intra-District Funds","target":"Independent","value":0}
,
{"source":"Independent","target":"Alcoholic Beverage Regulation Administration","value":0}
,
{"source":"Intra-District Funds","target":"Independent","value":0}
,
{"source":"Independent","target":"Public Service Commission","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Department of Insurance, Securities, and Banking","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Office of Cable Television","value":0}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":0}
,
{"source":"Office of Planning  and Economic Development","target":"Housing Authority Subsidy","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":24757852}
,
{"source":"Office of Public Safety and Justice","target":"Metropolitan Police Department","value":24757852}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Fire and Emergency Medical Services Department","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":169454}
,
{"source":"Office of Public Safety and Justice","target":"Department of Corrections","value":169454}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Homeland Security and Emergency Management Agency","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Chief Medical Examiner","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":1641263}
,
{"source":"Office of Public Safety and Justice","target":"Office of Administrative Hearings","value":1641263}
,
{"source":"Intra-District Funds","target":"Independent","value":70004}
,
{"source":"Independent","target":"Criminal Justice Coordinating Council","value":70004}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":278178}
,
{"source":"Office of Public Safety and Justice","target":"Office of Unified Communications","value":278178}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":5341920}
,
{"source":"Office of Public Safety and Justice","target":"Homeland Security Grants","value":5341920}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":988042}
,
{"source":"Office of Public Safety and Justice","target":"Department of Forensic Sciences","value":988042}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":200393}
,
{"source":"Office of Public Safety and Justice","target":"Office of the Deputy Mayor for Public Safety and Justice","value":200393}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"Office of Victim Services","value":0}
,
{"source":"Intra-District Funds","target":"Office of Education","value":104257100}
,
{"source":"Office of Education","target":"District of Columbia Public Schools","value":104257100}
,
{"source":"Intra-District Funds","target":"Office of Education","value":38188288}
,
{"source":"Office of Education","target":"Office of the State Superintendent of Education","value":38188288}
,
{"source":"Intra-District Funds","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"District of Columbia Public Library","value":0}
,
{"source":"Intra-District Funds","target":"Office of Education","value":0}
,
{"source":"Office of Education","target":"Office of Public Education Facilities Modernization","value":0}
,
{"source":"Intra-District Funds","target":"Office of Education","value":5000000}
,
{"source":"Office of Education","target":"Special Education Transportation","value":5000000}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":11480816}
,
{"source":"Office of Health and  Human Services","target":"Department of Human Services","value":11480816}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":11092000}
,
{"source":"Office of Health and  Human Services","target":"Child and Family Services Agency","value":11092000}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":18862679}
,
{"source":"Office of Health and  Human Services","target":"Department of Behavioral Health","value":18862679}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":49486785}
,
{"source":"Office of Health and  Human Services","target":"Department of Health","value":49486785}
,
{"source":"Intra-District Funds","target":"Office of Education","value":2265000}
,
{"source":"Office of Education","target":"Department of Parks and Recreation","value":2265000}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":2558317}
,
{"source":"Office of Health and  Human Services","target":"D.C. Office on Aging","value":2558317}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":0}
,
{"source":"Office of Health and  Human Services","target":"Office of Human Rights","value":0}
,
{"source":"Intra-District Funds","target":"Office of the Chief of Staff","value":200000}
,
{"source":"Office of the Chief of Staff","target":"Office on Latino Affairs","value":200000}
,
{"source":"Intra-District Funds","target":"Office of the Chief of Staff","value":0}
,
{"source":"Office of the Chief of Staff","target":"Office on Asian and Pacific Islander Affairs","value":0}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":386150}
,
{"source":"Office of Health and  Human Services","target":"Department of Youth Rehabilitation Services","value":386150}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":50869}
,
{"source":"Office of Health and  Human Services","target":"Department on Disability Services","value":50869}
,
{"source":"Intra-District Funds","target":"Office of Health and  Human Services","value":74624814}
,
{"source":"Office of Health and  Human Services","target":"Department of Health Care Finance","value":74624814}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":23511445}
,
{"source":"Office of Public Safety and Justice","target":"Department of Public Works","value":23511445}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":0}
,
{"source":"Office of Public Safety and Justice","target":"District Department of Transportation","value":0}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":7383542}
,
{"source":"Office of Public Safety and Justice","target":"Department of Motor Vehicles","value":7383542}
,
{"source":"Intra-District Funds","target":"Office of Public Safety and Justice","value":1150238}
,
{"source":"Office of Public Safety and Justice","target":"Department of Energy and Environment","value":1150238}
,
{"source":"Intra-District Funds","target":"Office of Planning  and Economic Development","value":200000}
,
{"source":"Office of Planning  and Economic Development","target":"D.C. Taxicab Commission","value":200000}
,
{"source":"Intra-District Funds","target":"Regional","value":0}
,
{"source":"Regional","target":"Washington Metropolitan Area Transit Authority","value":0}
];
var margin = {
    top: 50,
    right: 210,
    bottom: 10,
    left: 10
},
width = 1160 - margin.left - margin.right,
height = 630 - margin.top - margin.bottom;
d3.sankey = function() {
    "use strict";

    function e() {
        f.forEach(function(e) {
            e.sourceLinks = [], e.targetLinks = []
        }), v.forEach(function(e) {
            var t = e.source,
                r = e.target;
            "number" == typeof t && (t = e.source = f[e.source]), "number" == typeof r && (r = e.target = f[e.target]), t.sourceLinks.push(e), r.targetLinks.push(e)
        })
    }

    function t() {
        f.forEach(function(e) {
            e.sTag = [], e.tTag = []
        }), v.forEach(function(e) {
            var t = e.source,
                r = e.target;
            "number" == typeof t && (t = e.source), "number" == typeof r && (r = e.target), t.tTag.push(e.tt), r.sTag.push(e.st)
        })
    }

    function r() {
        f.forEach(function(e) {
            e.value = Math.max(d3.sum(e.sourceLinks, u), d3.sum(e.targetLinks, u))
        })
    }

    function n() {
        for (var e, t = f, r = 0; t.length;) e = [], t.forEach(function(t) {
            t.x = r, t.dx = l, t.sourceLinks.forEach(function(t) {
                e.push(t.target)
            })
        }), t = e, ++r;
        g(r), p((width - l) / (r - 1))
    }

    function a(e, t) {
        var r = e.sort(function(e, r) {
            var n = e[t],
                a = r[t];
            return a > n ? 1 : n > a ? -1 : 0
        });
        return r
    }

    function o() {
        function e() {
            var e = d3.min(r, function(e) {
                return (d[1] - (e.length - 1) * c) / d3.sum(e, u)
            });
            r.forEach(function(t) {
                t.forEach(function(t, r) {
                    t.y = r, t.count = r, t.dy = t.value * e
                })
            }), v.forEach(function(t) {
                t.dy = t.value * e
            })
        }

        function t() {
            r.forEach(function(e) {
                var t, r, n, a = 0,
                    o = e.length;
                for (n = 0; o > n; ++n) t = e[n], r = a - t.y, r > 0 && (t.y += r), a = t.y + t.dy + c;
                if (r = a - c - d[1], r > 0)
                    for (a = t.y -= r, n = o - 2; n >= 0; --n) t = e[n], r = t.y + t.dy + c - a, r > 0 ? t.y -= r : a = t.y
            })
        }
        var r = d3.nest().key(function(e) {
            return e.x
        }).sortKeys(d3.ascending).entries(f).map(function(e) {
            return e.values
        });
        a(r[0], "value"), a(r[1], "value"), a(r[2], "value"), e(), t()
    }

    function i() {
        function e(e, t) {
            return e.source.y - t.source.y
        }

        function t(e, t) {
            return e.target.y - t.target.y
        }
        f.forEach(function(r) {
            r.sourceLinks.sort(t), r.targetLinks.sort(e)
        }), f.forEach(function(e) {
            var t = 0,
                r = 0;
            e.sourceLinks.forEach(function(e) {
                e.sy = t, t += e.dy
            }), e.targetLinks.forEach(function(e) {
                e.ty = r, r += e.dy
            })
        })
    }

    function u(e) {
        return e.value
    }
    var s = {},
        l = 24,
        c = 8,
        d = [1, 1],
        f = [],
        v = [],
        h = .35;
    s.nodeWidth = function(e) {
        return arguments.length ? void(l = +e) : l
    }, s.nodePadding = function(e) {
        return arguments.length ? void(c = +e) : c
    }, s.nodes = function(e) {
        return arguments.length ? void(f = e) : f
    }, s.links = function(e) {
        return arguments.length ? void(v = e) : v
    }, s.size = function(e) {
        return arguments.length ? void(d = e) : d
    }, s.layout = function() {
        e(), t(), r(), n(), o(), i()
    }, s.curvature = function(e) {
        return arguments.length ? void(h = +e) : h
    }, s.relayout = function() {
        i()
    }, s.link = function() {
        function e(e) {
            var r = e.source.x + e.source.dx,
                n = e.target.x,
                a = d3.interpolateNumber(r, n),
                o = a(t),
                i = a(1 - t),
                u = e.source.y + e.sy + e.dy / 2,
                s = e.target.y + e.ty + e.dy / 2;
            return "M" + r + "," + u + "C" + o + "," + u + " " + i + "," + s + " " + n + "," + s
        }
        var t = s.curvature();
        return e
    };
    var g = function(e) {
            f.forEach(function(t) {
                t.sourceLinks.length || (t.x = e - 1)
            })
        },
        p = function(e) {
            f.forEach(function(t) {
                t.x *= e
            })
        };
    return s
},
function() {
    "use strict";

    function e(e, t) {
        return e - t
    }

    function t(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    function r(e, t) {
        var r = e.sort(function(e, r) {
            var n = e[t],
                a = r[t];
            return a > n ? -1 : n > a ? 1 : 0
        });
        return r
    }

    function n(e, t) {
        var r = e.sort(function(e, r) {
            var n = e[t],
                a = r[t];
            return a > n ? 1 : n > a ? -1 : 0
        });
        return r
    }

    function a(e, t) {
        var r = {},
            n = e.length,
            a = 0;
        for (a = 0; n > a; a++) {
            var o = e[a][t];
            o in r || (r[o] = []), r[o].push(e[a])
        }
        return r
    }

    function o(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }

    function i(e, t) {
        var r = a(e, t),
            n = o(r);
        return n
    }

    function u(e, t, a, o) {
        var u = {},
            s = "direction must be up or down, you have broken sort method in loop",
            l = "up" === o ? r : "down" === o ? n : console.log(s);
        return u = i(e, t), u.forEach(function(e) {
            l(e, a)
        }), u
    }

    function s(e) {
        return !isNaN(e) && e % 2 == 0
    }

    function l(e) {
        var t = {
                eachNode: [],
                eachLink: [],
                fullList: []
            },
            r = e,
            r = e.filter(function(e) {
                return e.value > 0
            });
        return r.sort(function(e, t) {
            return t.value - e.value
        }), r.forEach(function(e) {
            t.eachNode.push({
                name: e.source
            }), t.eachNode.push({
                name: e.target
            }), t.eachLink.push({
                source: e.source,
                target: e.target,
                sourceName: e.source,
                targetName: e.target,
                st: void 0,
                tt: void 0,
                theColor: void 0,
                num: 0,
                type: "link",
                value: +e.value
            })
        }), t.eachNode = d3.keys(d3.nest().key(function(e) {
            return e.name
        }).map(t.eachNode)), t.eachLink.forEach(function(e, r) {
            t.eachLink[r].source = t.eachNode.indexOf(t.eachLink[r].source), t.eachLink[r].theColor = t.eachLink[r].source, t.eachLink[r].target = t.eachNode.indexOf(t.eachLink[r].target), t.eachLink[r].num = r
        }), t.eachLink.forEach(function(e, r) {
            t.eachLink[r].st = t.eachLink[r].source, t.eachLink[r].tt = t.eachLink[r].target
        }), t.eachNode.forEach(function(e, r) {
            t.eachNode[r] = {
                name: e,
                theColor: V(r),
                strokeColor: void 0,
                num: r
            }
        }), t.eachNode.forEach(function(e, r) {
            var n = d3.rgb(t.eachNode[r].theColor).darker(.3);
            t.eachNode[r].strokeColor = n
        }), t.eachLink.forEach(function(e, r) {
            t.eachLink[r].theColor = t.eachNode[t.eachLink[r].theColor].theColor
        }), t
    }

    function c() {
        var e = {};
        return e = d3.select("#chart").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    }

    function d(e, t) {
        t || (t = 2);
        var r = Math.pow(10, t);
        return (parseInt(e * r) / r).toFixed(t)
    }

    function f() {
        var e = {};
        return e = J.selectAll("#chart").data(O.links()).enter().append("path").attr("class", "link").attr("d", O.link()).style(K.link_init_style).sort(function(e, t) {
            return t.dy - e.dy
        })
    }

    function v() {
        var e = {};
        return e = J.selectAll("#chart").data(w.eachNode).enter().append("rect").attr("transform", function(e) {
            return "translate(" + e.x + "," + e.y + ")"
        })
    }

    function h(e) {
        return e.theColor
    }

    function g(e) {
        return e.strokeColor
    }

    function p() {
        var e = {};
        return e = J.append("g").selectAll("text").data(O.nodes()).enter().append("g").attr("class", "words").attr("transform", function(e) {
            return "translate(" + e.x + "," + e.y + ")"
        })
    }

    function y(e) {
        var t = 100 * e.dy,
            r = 270 > t ? 70 : 400;
        return r
    }

    function m(e, t, r, n) {
        var a = t,
            o = e,
            i = d3.selectAll("rect"),
            u = a.sourceName,
            s = a.targetName;
        o.transition().duration(y(a)).style(K.link_hovered), d3.timer.flush(), r = d3.selectAll("path").filter(function(e) {
            return e !== a
        }), r.transition().delay(650).duration(200).style(K.link_not_hovered), n = i.filter(function(e) {
            var t = e.name === u,
                r = e.name === s;
            return t ? !1 : r ? !1 : !0
        }), n.transition("node").duration(750).style(Y.node_not_from_link), F(t)
    }

    function k(e) {
        var t, r = d3.selectAll("path"),
            n = d3.selectAll("rect"),
            a = e;
        a.transition().style(K.link_reset_style_1).duration(1500).style(K.link_reset_style_2), d3.timer.flush(), t = r.filter(function(t) {
            return t !== e.datum()
        }), t.transition().duration(900).style(K.link_init_style), n.transition("node").duration(1500).style(rt[0]), I()
    }

    function _(e, t, r, n, a) {
        a = q.filter(function(e) {
            var r = e.sourceName === t,
                n = e.targetName === t;
            return r && n ? !1 : !0
        }), a.transition().delay(150).duration(850).style(K.link_not_from_node), n = q.filter(function(e) {
            var r = e.sourceName === t,
                n = e.targetName === t;
            return r ? !0 : n ? !0 : !1
        }), n.transition().delay(110).duration(850).style(K.link_from_node), r = z.filter(function(t) {
            return t !== e
        }), r.transition("node").delay(300).duration(800).style(Y.node_not_hovered)
    }

    function x(e, t, r, n, a) {
        var o = t.name;
        e.transition("node").duration(2).style(Y.node_hovered), d3.timer.flush(), _(t, o, r, n, a), D(t)
    }

    function C(e) {
        var t, r = d3.selectAll("path");
        e.transition("node").duration(250).style(Y.node_return), d3.timer.flush(), r.transition().delay(110).duration(940).style(K.link_init_style), t = z.filter(function(t) {
            return t !== e.datum()
        }), t.transition("node").delay(500).style(Y.node_return), A()
    }

    function F(t) {
        var r = t.st,
            n = t.tt,
            a = [].concat(r, n).sort(e),
            o = 0,
            i = 0,
            u = {},
            s = {},
            l = function(e) {
                var t = {};
                return e.num !== a[o] ? t = e : void o++
            },
            c = function(e) {
                var t = {};
                return e.num === a[i] ? (i++, e) : void(t = e)
            };
        u = U.filter(c), u.transition("text").delay(900).style({
            "font-size": "17px",
            fill: "#000010",
            "pointer-events": "none"
        }).attr("x", -6).attr("text-anchor", "end").attr("transform", null).filter($.filterWidth).attr("x", 6 + O.nodeWidth()).attr({
            "text-anchor": "start",
            "pointer-events": "none"
        }), s = U.filter(l), s.transition("text").delay(900).style({
            "fill-opacity": 0,
            "pointer-events": "none"
        })
    }

    function R(e, t) {
        var r = 0,
            n = [],
            a = 0;
        return e.forEach(function(e) {
            e.forEach(function(e) {
                e.y - r < t && e.y - r > 0 && s(a) ? (n.push(e.num), a++) : a = 0, r = e.y
            })
        }), n
    }

    function D(t) {
        var r = t.num,
            n = t.sTag,
            a = t.tTag,
            o = [].concat(r, n, a).sort(e),
            i = o.length,
            s = i > 7 ? $.font_size_hover_group : "17px",
            l = 0,
            c = 0,
            d = 0,
            f = [],
            v = {},
            h = {},
            g = function(e) {
                var t = {};
                return e.num !== o[l] ? t = e : void l++
            },
            p = function(e) {
                var t = {};
                return e.num === o[d] ? (d++, t = e, f.push(t), t) : void 0
            };
        if (h = U.filter(g), h.transition("text").delay(1100).style({
                "fill-opacity": 0,
                "pointer-events": "none"
            }), v = U.filter(p), 12 > i) v.transition("text").delay(1100).style({
            "font-size": s,
            fill: "#000010",
            "pointer-events": "none"
        });
        else {
            var y = u(f, "x", "y", "up"),
                m = R(y, 10).sort(e),
                k = {},
                _ = function(e) {
                    var t = {};
                    return e.num === m[c] ? (c++, t = e) : void 0
                };
            k = v.filter(_), v.transition("text").delay(1100).style({
                "font-size": s,
                fill: "#000010",
                "pointer-events": "none"
            }), t.x > width / 2 || 0 === t.x ? k.transition("text").delay(1100).attr("y", function(e) {
                return e.dy / 2
            }).attr({
                x: -6,
                "text-anchor": "end"
            }).style({
                "font-size": s,
                fill: "#000010",
                "pointer-events": "none"
            }) : k.transition("text").delay(1100).attr("y", function(e) {
                return e.dy / 2
            }).attr({
                x: 6 + O.nodeWidth(),
                "text-anchor": "start"
            }).style({
                "font-size": s,
                fill: "#000010",
                "pointer-events": "none"
            })
        }
    }

    function I() {
        U.transition("text").delay(200).style({
            "fill-opacity": 1,
            "font-size": $.font_size,
            fill: $.font_color,
            "pointer-events": "none"
        }).attr("x", -6).attr("text-anchor", "end").attr("transform", null).filter($.filterWidth).attr("x", 6 + O.nodeWidth()).attr("text-anchor", "start")
    }

    function A() {
        U.transition("text").delay(200).style({
            "fill-opacity": 1,
            "font-size": $.font_size,
            fill: $.font_color,
            "pointer-events": "none"
        }).transition().attr("x", -6).attr("text-anchor", "end").attr("transform", null).filter($.filterWidth).attr("x", 6 + O.nodeWidth()).attr("text-anchor", "start")
    }

    function E(e) {
        var t = e.datum();
        "link" !== t.type ? x(e, t) : m(e, t)
    }

    function G(e) {
        "link" !== e.datum().type ? C(e) : k(e)
    }

    function T() {
        var e = d3.select(this);
        E(e)
    }

    function b() {
        var e = d3.select(this);
        G(e)
    }
    var O, w, P, H, L, S, N, z, M, B, W, U, j, J, q, Y, K, $, Q = (d3.format(",.0f"), function(e) {
            return "$" + t(e)
        }),
        V = d3.scale.category20();
    w = l(myData), J = Object.create(c());
    var X = 0,
        Z = 0,
        et = 0;
    O = Object.create(d3.sankey()), O.nodeWidth(30), O.nodePadding(4), O.size([width, height]), O.nodes(w.eachNode), O.links(w.eachLink), O.curvature(.01), O.layout(), L = O.nodes(), L.forEach(function(e, t) {
        0 === L[t].sTag.length && (X += L[t].value)
    }), S = O.nodes(), S.forEach(function(e, t) {
        0 === S[t].tTag.length && (Z += S[t].value)
    }), S.forEach(function(e, t) {
        S[t].sTag.length > 0 && S[t].tTag.length > 0 && (et += S[t].value)
    }), P = Object.create(theTip()), H = Object.create(theTip());
    var tt = X;
    P.attr("class", "theTip").html(function(e) {
        var t = ["<span class='titleTip'>", e.name.toUpperCase(), "</span>", "<div class='drawline'></div>", "<span class='totalTip'><strong>Total: </strong>", Q(e.value), "</span><br>", "<span class='totalTip inRed'>", d(e.value / tt * 100, 3), "%", "<span class='budget'> of Budget </span>", "</span>"],
            r = t.join("");
        return r
    }), H.attr("class", "theTip").html(function(e) {
        var t = ["<span class='titleTip'>", e.sourceName.toUpperCase(), " → ", e.targetName, "</span>", "<div class='drawline'></div>", "<span class='totalTip'><strong>Total: </strong>", Q(e.value), "</span><br>", "<span class='totalTip inRed'>", d(e.value / tt * 100, 3), "%", "<span class='budget'> of Budget </span>", "</span>"],
            r = t.join("");
        return r
    }), K = {
        link_stroke_width: function(e) {
            return Math.max(2, e.dy)
        },
        link_stroke_width_hover: function(e) {
            return Math.max(4, e.dy)
        },
        link_color: function(e) {
            return e.value > 3e6 ? e.theColor : d3.rgb(e.theColor).darker(2.5)
        }
    }, K.link_init_style = {
        fill: "none",
        "stroke-opacity": .15,
        "stroke-width": K.link_stroke_width,
        stroke: K.link_color
    }, K.link_reset_style_1 = {
        "stroke-opacity": .15
    }, K.link_reset_style_2 = {
        "stroke-width": K.link_stroke_width,
        stroke: K.link_color
    }, K.link_hovered = {
        "stroke-opacity": .6,
        "stroke-width": K.link_stroke_width_hover
    }, K.link_not_hovered = {
        "stroke-width": K.link_stroke_width,
        "stroke-opacity": .05
    }, K.link_from_node = {
        "stroke-opacity": .5,
        "stroke-width": K.link_stroke_width
    }, K.link_not_from_node = {
        "stroke-opacity": 0,
        "stroke-width": K.link_stroke_width
    }, N = Object.create(f()), q = d3.selectAll("path"), N.on("mouseover", T).on("mouseout", b).on("mouseenter", H.show).on("mouseleave", H.hide).on("touchstart", H.show), B = Object.create(v()), Y = {};
    var rt = new Array(1),
        nt = function(e) {
            var t = 100 * parseFloat(e.dy),
                r = 270 > t ? "6px" : "2px";
            return r
        };
    rt[0] = {
        "stroke-opacity": 1,
        "fill-opacity": .8,
        "shape-rendering": "crispEdges",
        overflow: "visible",
        "stroke-width": "1px",
        "z-index": 1e3
    }, Y.node_hovered = {
        "fill-opacity": .7,
        "stroke-width": nt,
        "z-index": -100
    }, Y.node_not_hovered = {
        "stroke-width": "1px",
        "stroke-opacity": 1,
        "fill-opacity": 1e-6
    }, Y.node_from_link = {
        "stroke-width": "1px",
        "stroke-opacity": 1,
        "fill-opacity": .6
    }, Y.node_not_from_link = {
        "stroke-opacity": .6,
        "stroke-width": "1px",
        "fill-opacity": 1e-6
    }, Y.node_return = {
        "fill-opacity": .8,
        "stroke-opacity": 1,
        "stroke-width": "1px"
    }, B.attr("class", "node").attr("height", function(e) {
        return e.dy
    }).attr("width", O.nodeWidth()).style("fill", h).style("stroke", g).style(rt[0]), B.on("mouseover", T).on("mouseout", b).on("mouseenter", P.show).on("mouseleave", P.hide).on("touchstart", P.show), z = d3.selectAll("rect"), M = Object.create(p()), $ = {}, $.font_size = function(e) {
        return e.dy > 50 ? "15px" : e.dy <= 1.5 ? "0px" : e.dy <= 3 ? "8px" : e.dy <= 4 ? "9.5px" : e.dy <= 8 ? "11px" : e.dy <= 20 ? "12.5px" : "13px"
    }, $.font_size_hover_group = function(e) {
        return e.dy > 50 ? "17px" : e.dy <= 1.5 ? "9px" : e.dy <= 3 ? "10px" : e.dy <= 4 ? "10px" : e.dy <= 8 ? "13px" : e.dy <= 20 ? "14px" : "16px"
    }, $.font_color = function(e) {
        return e.dy > 50 ? "#000010" : e.dy <= 1.5 ? "#9AADB2" : e.dy <= 3 ? "#343F47" : e.dy <= 8 ? "#252D33" : e.dy <= 20 ? "#14191C" : "#111417"
    }, $.font_opacity = function(e) {
        return e.dy < 1.5 ? 0 : void 0
    }, $.label_style = {
        "font-size": $.font_size,
        fill: "#000010",
        "pointer-events": "none",
        "z-index": 10,
        "text-shadow": "01px 0 #fff"
    }, $.filterWidth = function(e) {
        return e.x < width / 2
    }, M.append("text").attr("class", "labels").attr("x", -6).attr("y", function(e) {
        return e.dy > 1.5 ? e.dy / 2 : 4
    }).attr("dy", ".35em").attr("text-anchor", "end").attr("transform", null).text(function(e) {
        return e.name
    }).style($.label_style).filter($.filterWidth).attr("x", 6 + O.nodeWidth()).attr("text-anchor", "start"), U = d3.selectAll("text"), W = Object.create(p());
    var j = ["Revenue Source", "Fund", "Agency"];
    W.append("text").attr("x", O.nodeWidth()).attr("text-anchor", "end").attr("transform", null).text(function(e) {
        return 0 === e.y ? j.shift() : void 0
    }).attr("y", function(e) {
        return e.y - 1 + "em"
    }).style("font-size", "24px").style("font-weight", 500).filter(function(e) {
        return e.x < width / 1.2
    }).attr("x", 0).attr("text-anchor", "start");
    var at = Object.create(p()),
        ot = new Array;
    ot.push(X), ot.push(et), ot.push(Z), at.append("text").attr("x", O.nodeWidth()).attr("text-anchor", "end").attr("transform", null).text(function(e) {
        return 0 === e.y ? Q(ot.shift()) : void 0
    }).attr("y", function(e) {
        return e.y - .4 + "em"
    }).style("font-size", "16px").style("font-weight", 100).filter(function(e) {
        return e.x < width / 1.2
    }).attr("x", 0).attr("text-anchor", "start"), J.call(theTip)
}();
