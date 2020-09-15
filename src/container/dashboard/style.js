import Styled from 'styled-components';

const EChartCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .card-chunk{
        width: 50%;
        flex: 0 0 50%;
    }
    @media only screen and (max-width: 379px){
        .card-chunk{
            width: 100%;
            flex: 0 0 100%;
            h1{
                margin-bottom: 0;
            }
            p{
                margin: 5px 0 20px 0;
            }
        }
    }
`;
const DashboardBaseStyleWrap = Styled.div`
    h1{
        margin-bottom: 30px;
    }
    .ant-row{
        margin: -5px 0;
    }
    .ant-col{
        margin: 5px 0;
    }
`;

const Focard = Styled.div`
    canvas{
        width: 100% !important;
        margin-top: 43px;
        @media only screen and (max-width: 1199px){
            margin-top: 45px;
        }
    }}
    .focard-details{
        &.growth-downward{
            h1{
                font-size: 30px;
            }
            .focard-status{
                .focard-status__percentage{
                    color: ${({ theme }) => theme['danger-color']};
                    font-size: 16px;
                }
            }
        }
        &.growth-upward{
            .focard-status{
                .focard-status__percentage{
                    color: ${({ theme }) => theme['success-color']};
                    font-size: 16px;
                }
            }
        }
        h1{
            font-weight: 600;
            margin-bottom: 2px;
        }
        .subtitle{
            font-size: 14px;
            color: #868EAE;
            margin-bottom: 10px;
        }
        .focard-status{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0 -5px;
            span{
                display: inline-flex;
                align-items: center;
                margin: 0 5px;
                &.focard-status__percentage{
                    font-weight: 500;
                }
            }
            span + span{
                color: #868EAE;
                font-size: 13px;
            }
        }
        svg{
            width: 15px;
            margin-right: 10px;
        }
    }

    .focard-chart{
        margin-left: -10px;
    }

    @media (max-width: 1300px){
        .focard-details{
            h1{
                font-size: 24px;
            }
            &.growth-downward{
                h1{
                    font-size: 24px;
                }
            }
        }
    }

    .forcast-card-box{
        .ant-card-body{
            padding: 0 !important;
            h1{
                padding: 25px 0 0 25px;
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 26px;
            }
        }

        .focard-details{
            margin-top: 15px;
            padding: 0 25px 22px;
            h1{
                padding: 0;
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 4px;
            }
            p{
                margin-bottom: 0;
            }
        }
        canvas{
            margin-top: 0px;
            border-radius: 0 0 10px 10px;
        }
        .chart-label{
            display: none;
        }
    }
`;

const CardBarChart = Styled.div`
    .card-bar-top{
        &.flex-grid{
            margin-left: -20px;
            @media only screen and (max-width: 575px) {
                flex-flow: column;
                align-items: center;
                text-align: center;
            }
            h1{
                font-size: 24px;
                margin-bottom: 22px;
                @media only screen and (max-width: 1199px) {
                    font-size: 20px;
                }
            }
        }
        .flex-grid-child{
            padding: 0 20px;
        }
        p{
            font-size: 14px;
            margin-bottom: 8px;
            color: ${({ theme }) => theme['light-color']};
        }
        h1{
            margin-bottom: 18px;
            sub{
                bottom: 0;
                font-size: 14px;
                margin-left: 8px;
                color: ${({ theme }) => theme['success-color']};
                svg{
                    margin-right: 4px;
                }
            }
        }
    }
    ul{
        margin-top: 15px;
    }
`;

const CardGroup = Styled.div`
    .forcast-overview{
        .ant-card-body{
            padding: 0 24px !important;
        }
    }
    .card-radio{
        .ant-radio-button-wrapper{
            height: 30px;
            line-height: 28px;
            font-size: 12px;
            font-weight: 500;
            padding: 0 10.5px;
            color: ${({ theme }) => theme['gray-color']};
            border-color: ${({ theme }) => theme['border-color-light']};
            &:before{
                display: none;
            }
            &:focus-within{
                box-shadow: 0 0;
            }
            &:first-child{
                border-radius: 3px 0 0 3px;
            }
            &:last-child{
                border-radius: 0 3px 3px 0;
            }
            &.ant-radio-button-wrapper-checked{
                color: #fff !important;
                background: ${({ theme }) => theme['primary-color']} !important;
                &:hover{
                    color: #fff !important;
                    background: ${({ theme }) => theme['primary-color']} !important;
                }
            }
            &:hover{
                background: ${({ theme }) => theme['bg-color-normal']} !important;
            }
        }
    }
    .focard-wrapper{
        margin: 0 -12px;
        padding: 24px 0 25px 12px;
        @media only screen and (max-width: 1199px){
            margin: 0;
        }
        .ant-col-md-12{
            padding: 0 12px 0 12px;
            @media only screen and (max-width: 1350px){
                padding: 0 6px;
            }
            @media only screen and (max-width: 575px){
                &:not(:last-child){
                    margin-bottom: 20px;
                }
            }
            &:first-child{
                @media only screen and (max-width: 1350px){
                    padding-left: 20px;
                    padding-right: 0;
                }
                @media only screen and (max-width: 1199px){
                    padding: 0 12px 0 0;
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
            }
            &:last-child{
                padding: 0 12px 0 12px;
                @media only screen and (max-width: 1350px){
                    &:last-child{
                        padding: 0 6px 0 14px;
                    }
                }
                @media only screen and (max-width: 1199px){
                    &:last-child{
                        padding: 0 0 0 12px;
                        @media only screen and (max-width: 575px){
                            padding: 0;
                        }
                    }
                }
            }
        }

        &.focard-divider{
            padding-left: 0;
            padding-right: 15px;
            border-right: 1px solid ${({ theme }) => theme['border-color-light']} !important;
            @media only screen and (max-width: 1199px){
                border-right: 0 none !important;
                padding: 0;
            }
            .ant-col-md-12{
                &:first-child{
                    padding: 0 12px 0 12px;
                    @media only screen and (max-width: 1350px){
                        padding: 0 6px;
                    }
                    @media only screen and (max-width: 1199px){
                        padding: 0 12px 0 0;
                    }
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
                &:last-child{
                    padding: 0 12px 0 12px;
                    @media only screen and (max-width: 1350px){
                        padding: 0 6px;
                    }
                    @media only screen and (max-width: 1199px){
                        padding: 0 0 0 12px;
                    }
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
            }
        }
    }

    .traffic-table{
        .ant-table{
            border-radius: 10px;
        }
        table{
            color: #333;
            thead{
                th{
                    padding: 10px 16px;
                    &:nth-child(2){
                        border-left: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                    &:nth-child(4){
                        border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                }
            }
            tbody{
                tr{
                    &:hover{
                        td{
                            background: ${({ theme }) => theme['bg-color-light']};
                            .social-name{
                                color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                    }
                }
                td{
                    border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                    &:first-child{
                        border-left: 0 none;
                    }
                    &:last-child{
                        border-right: 0 none;
                    }
                    .traffic-title{
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                    .social-name{
                        color: ${({ theme }) => theme['info-color']};
                    }
                }
            }
        }
    }
`;

const ExList = Styled.div`
    padding: 25px 0 0;
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme['border-color-light']};
    @media only screen and (max-width: 1599px){
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border-right: 0 none;
        margin: 0 -15px;
        padding: 15px 0 0;

    }
    div{
        margin-bottom: 25px;
        @media only screen and (max-width: 1599px){
            flex: 0 0 25%;
            padding: 15px;
            margin-bottom: 10px;
        }
        @media only screen and (max-width: 1199px){
            flex: 0 0 50%;
            padding: 5px 15px;
            margin-bottom: 5px;
        }
        @media only screen and (max-width: 575px){
            flex: 0 0 100%;
            text-align: center;
        }
        p{
            font-size: 14px;
            color: ${({ theme }) => theme['light-gray-color']};
            margin-bottom:0;
        }
        h1{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 0;
            @media only screen and (max-width: 991px){
                font-size: 20px;
            }
            & > span{
                margin-right: 10px;
                @media only screen and (max-width: 1599px){
                    display: block;
                }
            }
            sub{
                font-size: 13px;
                font-weight: 400;
                display: inline-flex;
                align-items: center;
                line-height: normal;
                color: ${({ theme }) => theme['light-color']};
                span{
                    display: inline-flex;
                    align-items: center;
                    color: ${({ theme }) => theme['success-color']};
                    padding: 0 10px 0 0;
                }
                svg{
                    width:12px;
                }
                &.growth-downward{
                    span{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }
`;

const OverviewCard = Styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${({ theme }) => theme['secondary-color']}, ${({ theme }) =>
  theme['warning-color']});
        left:0;
        top:0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .ant-progress{
            margin-bottom: 15px;
        }
        .overview-box-single{
            h1{
                margin-bottom: 2px;
            }
            p{
                color: ${({ theme }) => theme['light-color']};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                margin-left: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({ theme }) => theme['light-gray-color']};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({ theme }) => theme['light-gray-color']};
                font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            background: rgba(255,255,255,0.1);
            padding: 0px 11px;
            border: 0 none;
            color: #fff;
        }
    }
`;

const PerformanceChartWrapper = Styled.div`
    .performance-lineChart{
        margin-top: 20px;
        .chart-label{
            display: none;
        }
        ul{
            margin-top: 16px;
        }
    }
`;

const Pstates = Styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -25px 0 25px;
    @media only screen and (max-width: 767px){
        flex-flow: column;
    }
    >div{
        transition: 0.3s ease;
        padding: 20px;
        @media only screen and (max-width: 1599px){
            flex: 0 0 50%;
        }
        &:hover{
            box-shadow: 0 15px 30px rgba(146,153,184,0.15);
            p{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
        &.growth-downward{
            background: ${({ theme }) => theme['bg-color-light']};
        }
    }
    .growth-upward,
    .growth-downward{
        cursor: pointer;
        &:focus{
            outline: none
        }
        h1{
            font-size: 24px;
        }
    }
`;

const SessionChartWrapper = Styled.div`
    min-height: 510px;
    background: #fff;
    border-radius: 10px;
    @media only screen and (max-width: 1599px){
        min-height: 440px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    .session-chart-inner{
        ul{
            display: flex;
            max-width: 365px;
            margin: 40px auto 6px auto;
            li{
                width: 33.33%;
                text-align: center;
                position: relative;
                .doughnutLabelColor{
                    position: absolute;
                    display: block;
                    height: 8px;
                    width: 8px;
                    border-radius: 50%;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 14px;
                    @media only screen and (max-width: 1400px){
                        left: 5px;
                    }
                    @media only screen and (max-width: 1300px){
                        left: 0;
                    }
                    @media only screen and (max-width: 1199px){
                        left: 15px;
                    }
                    @media only screen and (max-width: 379px){
                        left: 0;
                    }
                }
                .doughnutLabe{
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
        }
        p{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            margin-bottom: 0;
            display: inline-block;
            transform: translate(-50%, -50%);
            span{
                font-size: 24px;
                display: block;
                font-weight: 600;
            }
        }
    }
`;

const SessionState = Styled.div`
    // margin: 0 0 15px -15px;
    max-width: 365px;
    margin: 42px auto auto;
    >div{
        width: 33.33%;
        text-align: center;
        span{
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            @media only screen and (max-width: 1300px){
                display: block;
            }
            @media only screen and (max-width: 1199px){
                display: inline-block;
            }
            @media only screen and (max-width: 379px){
                display: block;
            }
        }
        sub{
            bottom: 0;
            left: 5px;
            font-size: 13px;
            color: ${({ theme }) => theme['light-gray-color']};
        }
    }

    .session-single{
        text-align: center;
    }
`;

const RegionList = Styled.div`
    max-height: 300px;
    overflow: hidden auto;
    border: 1px solid ${({ theme }) => theme['border-color-light']};
    table{
        tr{
            &:first-child{
                td{
                    padding-top: 15px;
                }
            }
            &:last-child{
                td{
                    padding-bottom: 15px;
                }
            }
            th{
                background: ${({ theme }) => theme['bg-color-light']};
                padding: 9px 20px;
                border: 0 none;
            }
            td{
                border: 0 none;
                padding: 5px 20px;
            }
        }
    }

`;

const RegionMap = Styled.div`
    text-align: center;
    height: 100%;
    margin-top: 25px;
    padding-left: 20px;
    svg{
        height: 230px;
        margin: 0 auto;
        @media only screen and (max-width: 479px){
            width: 280px;
        }
    }
`;

const LadingPages = Styled.div`
    @media only screen and (max-width: 1599px){
        min-height: 380px;
    }
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
    }
    table{
        th{
            text-align: right !important;
            &:first-child{
                text-align: left !important;
            }
        }
        tbody{
            tr{
                td{
                    text-align: right;
                    &:first-child{
                        text-align: left;
                    }
                    .page-title{
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }
`;

const CardBarChart2 = Styled.div`
    @media only screen and (max-width: 379px){
        text-align: center
    }
    h1{
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 1500px){
        h1{
            font-size: 22px;
        }
    }
    & > span{
        font-size: 14px;
        color: ${({ theme }) => theme['light-gray-color']};
    }
    p{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px 0 0 0;
        @media only screen and (max-width: 379px){
            justify-content: center;
        }
        .growth-upward, .growth-downward{
            display: inline-flex;
            align-items: center;
            padding-right: 10px;
            font-weight: 600;

            svg{
                width: 15px;
            }
        }
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            svg{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            svg{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
        span{
            color: ${({ theme }) => theme['light-gray-color']};
            font-size: 13px;
            display: inline-block;
        }
    }
`;

const SocialMediaWrapper = Styled.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`;

const LineChartWrapper = Styled.div`
    .linkedin-chart-wrap{
        min-height: 379px;
    }
    .growth-upward,
    .growth-downward{
        line-height: 2.2;
        h1{
            margin-bottom: 0;
        }
    }
    .line-chart-row{
        &:not(:last-child){
            margin-bottom: 20px;
        }
        .border-linechart{
            border-bottom: 1px solid ${({ theme }) => theme['border-color-deep']};
            position: relative;
            &:before{
                position: absolute;
                content: '';
                width: 10px;
                height: 2px;
                left: 0;
                bottom: -1px;
                background: #fff;
            }
        }
    }
    .overview-container{
        .line-chart-row{
            &:not(:last-child){
                margin-bottom: 18px;
            }
        }
    }
`;

const RatioCard = Styled.div`
    .ant-card-body{
        h1{
            font-size: 16px;
            font-weight: 500;
        }
    }
    .ratio-content{
        margin-top: 30px;
        h1{
            margin-bottom: 2px;
            font-size: 36px;
            font-weight: 600;
        }
        .ant-progress{
            margin-bottom: 12px;
            .ant-progress-text{
                position: absolute;
                right: 0;
                bottom: 26px;
                font-weight: 500;
            }
            &.progress-success{
                .ant-progress-text{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            &.ant-progress-status-warning{
                .ant-progress-text{
                    color: ${({ theme }) => theme['warning-color']};
                }
            }
        }
        p{
            color: ${({ theme }) => theme['light-color']};
            margin-bottom: 0;
            strong{
                font-size: 13px;
                color: ${({ theme }) => theme['dark-color']};
                font-weight: 600;
            }
        }
    }
`;

const IncomeExpenseWrapper = Styled.div`
    .ant-card-body{
        padding: 0 25px !important;
    }
    canvas{
        padding: 25px 0 0;
        @media only screen and (max-width: 1599px){
            padding-top: 5px;
        }
    }
    ul{
        padding: 10px 0 25px 0;
        margin: -5px -12px;
        li{
            padding: 5px 12px;
        }
    }
`;

const LocationMapWrapper = Styled.div`
    .location-map{
        padding: 20px 0;
        svg{
            width: 320px;
            height: 160px;
            @media only screen and (max-width: 991px){
               height: 100%;
               width: auto;
            }
        }
    }
    .location-table{
        margin: 0 25px 15px;
        padding-top: 12px;
        min-height: 180px;
        border-top: 1px solid ${({ theme }) => theme['border-color-light']} !important;
        table{
            thead{
                th{
                    font-size: 12px;
                    background: #fff;
                    border: 0 none;
                    font-weight: 400;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme['light-color']};
                }
            }
            tr{
                &:hover{
                    td{
                        background: #fff;
                    }
                }
                td{
                    border: 0 none;
                    color: ${({ theme }) => theme['gray-color']};
                }
                th,
                td{
                    padding: 6px 16px;
                    &:first-child{
                        padding-left: 0;
                    }
                    &:last-child{
                        text-align: right;
                        padding-right: 0;
                    }
                }
            }
        }
    }
`;

const RevenueWrapper = Styled.div`

    .chart-label{
        justify-content: flex-start;
        margin-bottom: 26px;
        display: none
    }

    >.ant-card{
        min-height: 455px;
        @media only screen and (max-width: 1599px){
            min-height: 100%;
        }
    }

    .revenue-count{
        margin-bottom: 0;
        span{
            font-size: 24px;
            font-weight: 600;
        }

        span + span{
            margin-left: 50px;
        }
    }
`;

const RevenueTableWrapper = Styled.div`

    .full-width-table{
        >.ant-card{
            min-height: 487px;
            @media only screen and (max-width: 1599px){
                min-height: 100%;
            }
        }
    }
    .revenue-table{
        .ant-table-content{
            .ant-table-cell{
                padding: 10px 20px;
                &:first-child{
                    padding-left: 25px;
                }
                &:last-child{
                    padding-right: 25px;
                }
            }
        }
    }
`;

const RevenueChartWrapper = Styled.div`
    .revenue-chat-label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .chart-label{
            &:not(:last-child){
                margin-bottom: 12px;
            }
            .label-dot{
                &.dot-Desktop{
                    background: #20C997;
                }
                &.dot-Mobile{
                    background: #5F63F2;
                }
                &.dot-Tablets{
                    background: #FA8B0C;
                }
            }
        }
    }
    .revenue-chart-data{
        p{
            margin-bottom: 14px;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
`;

const TrafficTableWrapper = Styled.div`
    min-height: 450px;
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
    }
    table{
        thead{
            tr{
                th{
                    background: #fff;
                    border-top: 1px solid ${({ theme }) => theme['border-color-light']};
                    color: ${({ theme }) => theme['dark-color']}
                    padding: 16px 25px;
                    text-align: right;
                    &:first-child, &:nth-child(5){
                        text-align: left;
                    }
                }
            }
        }
        tbody{
            tr{
                td{
                    padding: 16px 25px;
                    color: ${({ theme }) => theme['gray-color']};
                    text-align: right;
                    &:first-child, &:nth-child(5){
                        text-align: left;
                    }
                }
            }
        }
    }
`;

const Map = Styled.div`
  margin: 1rem auto;
  width: 300px;

  svg {
    stroke: #fff;

    /* // All layers are just path elements */
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      /* // When a layer is hovered */
      &:hover {
        fill: rgba(168, 43, 43, 0.83);
      }

      /* // When a layer is focused. */
      &:focus {
        fill: rgba(168, 43, 43, 0.6);
      }

      /* // When a layer is 'checked' (via checkedLayers prop). */
      &[aria-checked='true'] {
        fill: rgba(56, 43, 168, 1);
      }

      /* // When a layer is 'selected' (via currentLayers prop). */
      &[aria-current='true'] {
        fill: rgba(56, 43, 168, 0.83);
      }

      /* // You can also highlight a specific layer via it's id */
      &[id='nz-can'] {
        fill: rgba(56, 43, 168, 0.6);
      }
    }
  }
`;

const ChartContainer = Styled.div`
    display: block;
    font-family: "Raleway";
    .chart-divider {
        display: block;
        width: 100%;
        height: 100px;
    }
    .chartjs-tooltip {
        opacity: 1;
        position: absolute;
        background: rgb(255,255,255);
        box-shadow: 1px 1px 6px rgba(0,0,0,0.3);
        color: #333;
        border-radius: 4px;
        /* padding: 50px; */
        min-width: 60px;
        /* min-height: 50px; */
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        pointer-events: none;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 5%);
        z-index: 9999;
        top: 0;
        left: 0
        &:before {
            position: absolute;
            content: '';
            border-bottom: 5px solid #fff;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: "pink";
        margin-right: 10px;
    }
    .tooltip-title {
        color: #666;
        font-size: 13px;
        font-weight: 600 !important;
        font-family: "Raleway";
        text-transform: capitalize;
    }
    .tooltip-value {
        color: #63b963;
        font-size: 22px;
        font-weight: 600 !important;
        font-family: "Raleway";
    }
    .tooltip-value sup {
        font-size: 12px;
    }
`;

export {
  ChartContainer,
  DashboardBaseStyleWrap,
  EChartCard,
  Focard,
  CardBarChart,
  CardGroup,
  ExList,
  OverviewCard,
  PerformanceChartWrapper,
  Pstates,
  SessionChartWrapper,
  SessionState,
  RegionMap,
  LadingPages,
  RegionList,
  CardBarChart2,
  SocialMediaWrapper,
  LineChartWrapper,
  RatioCard,
  IncomeExpenseWrapper,
  LocationMapWrapper,
  RevenueWrapper,
  RevenueTableWrapper,
  RevenueChartWrapper,
  TrafficTableWrapper,
  Map,
};
