const url = {
    form: {
        submit: '/form/submit'
    },
    front_detail: {
        get: '/detail/get'
    },
    detail: {
        company: '/detail/company',
        basic: '/detail/basic',
        get: '/detail/get'
    },
    approve: {
        submit: '/approve/submit',
        reject: '/approve/reject'
    }
};

const data = {
    company: {
        info: {
            name: {
                name: 'company.info.name',
                type: 'string',
                text: '企业名称'
            }
        }
    }
};

const _structure = {
    companyName: {
        from: data.company.info.name,
        verify: {}
    }
};

const render = {//渲染方式
    template: 'template',
    component: 'component',
};

const components = {
    'c1': {
        name: '基本信息表单',
        type: 'form',
        render: render.component,
        export: {
            id: 'c1f1',
            name: '提交',
            data: [
                _structure.companyName
            ],
            url: url.form.submit
        }
    },
    'c2': {
        name: '企业基本信息',
        type: 'view',
        render: render.component,
        import: {
            id: 'c2f1',
            name: '数据获取',
            data: [],
            url: url.detail.company
        }
    },
    'c3': {
        name: '企业提交的产品基本信息',
        type: 'view',
        render: render.component,
        import: {
            id: 'c2f2',
            name: '数据获取',
            data: [],
            url: url.detail.basic
        }
    },
    't1': {
        name: '使用模板弹框回填完善资料并提交',
        type: 'modal_form',
        render: render.template,
        import: {
            id: 't1f1',
            name: '数据回填',
            data: [
                _structure.companyName
            ],
            url: url.detail.get
        },
        export: {
            id: 't1f2',
            name: '提交',
            data: [
                _structure.companyName
            ],
            url: url.approve.submit
        }
    },
    't2': {
        name: '驳回附带理由',
        type: 'modal',
        render: render.component,
        export: {
            id: 't2f1',
            name: '驳回',
            url: url.approve.reject
        }
    },
    c4: {
        name: '基本信息表单',
        type: 'form',
        render: render.component,
        import: {
            id: 'c4f1',
            name: '数据回填',
            data: [
                _structure.companyName
            ],
            url: url.front_detail.get
        },
        export: {
            id: 'c4f1',
            name: '提交',
            data: [
                _structure.companyName
            ],
            url: url.form.submit
        }
    }
};

const templates = {
    't1': {
        content: [
            {
                from: _structure.companyName
            }
        ]
    }
}

const org = {
    '运营方-玖融壹-运营一部-专员': {},
    '运营方-玖融壹-运营二部-专员': {},
    '运营方-玖融壹-运营一部-主管': {},
    '运营方-玖融壹-运营二部-主管': {},
};

const flow = {
    dataStructure: _structure,//数据结构
    followers: [
        org["运营方-玖融壹-运营一部-专员"],
        org["运营方-玖融壹-运营一部-主管"],
        org["运营方-玖融壹-运营二部-专员"],
        org["运营方-玖融壹-运营二部-主管"]
    ],
    content: [
        {
            stage: 'start',
            operator: 'front',
            id: '1',
            name: '融资企业填写申请信息',
            render: [
                {
                    sid: 'rc1_1',
                    component: components.c1,
                    successTo: '2'
                }
            ],
        },
        //分配职位
        {
            stage: 'process',
            operator: 'back',
            followers: [org["运营方-玖融壹-运营一部-专员"], org["运营方-玖融壹-运营二部-专员"]],//从flow.followers 选择
            id: '2',
            name: '运营方运营专员补充资料',
            render: [
                {
                    id: 'rc2_1',
                    component: components.c2
                }, {
                    id: 'rc2_2',
                    component: components.c3
                }, {
                    id: 'rc2_3',
                    component: components.t1,
                    template: templates.t1,
                    successTo: '3'
                }, {
                    id: 'rc2_4',
                    component: components.t2,
                    successTo: '7'
                }
            ]
        },
        {
            stage: 'process',
            operator: 'front',
            id: '7',
            name: '融资企业修改申请信息',
            render: [
                {
                    id: 'rc7_1',
                    component: components.c4,
                    successTo: '2'
                }
            ]
        }
    ]
};