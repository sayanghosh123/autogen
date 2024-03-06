"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6319],{3566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(5893),s=t(1151),o=t(4866),r=t(5162);const a={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm_configuration.ipynb",source_notebook:"/website/docs/topics/llm_configuration.ipynb",title:"LLM Configuration"},l="LLM Configuration",c={id:"topics/llm_configuration",title:"LLM Configuration",description:"Open In Colab",source:"@site/docs/topics/llm_configuration.mdx",sourceDirName:"topics",slug:"/topics/llm_configuration",permalink:"/autogen/docs/topics/llm_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm_configuration.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm_configuration.ipynb",source_notebook:"/website/docs/topics/llm_configuration.ipynb",title:"LLM Configuration"},sidebar:"docsSidebar",previous:{title:"Jupyter Code Executor",permalink:"/autogen/docs/topics/code-execution/jupyter-code-executor"},next:{title:"Multi-agent Conversation Framework",permalink:"/autogen/docs/Use-Cases/agent_chat"}},d={},h=[{value:"Introduction to <code>config_list</code>",id:"introduction-to-config_list",level:2},{value:"<code>OAI_CONFIG_LIST</code> pattern",id:"oai_config_list-pattern",level:3},{value:"Why is it a list?",id:"why-is-it-a-list",level:3},{value:"How does an agent decide which model to pick out of the list?",id:"how-does-an-agent-decide-which-model-to-pick-out-of-the-list",level:3},{value:"Config list filtering",id:"config-list-filtering",level:3},{value:"Tags",id:"tags",level:4},{value:"Other configuration parameters",id:"other-configuration-parameters",level:2},{value:"AutoGen specific parameters",id:"autogen-specific-parameters",level:3},{value:"Extra model client parameters",id:"extra-model-client-parameters",level:3},{value:"Example",id:"example",level:2},{value:"Other helpers for loading a config list",id:"other-helpers-for-loading-a-config-list",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"llm-configuration",children:"LLM Configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/topics/llm_configuration.ipynb",children:(0,i.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/topics/llm_configuration.ipynb",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,i.jsxs)(n.p,{children:["In AutoGen, agents use LLMs as key components to understand and react.\nTo configure an agent\u2019s access to LLMs, you can specify an ",(0,i.jsx)(n.code,{children:"llm_config"}),"\nargument in its constructor. For example, the following snippet shows a\nconfiguration that uses ",(0,i.jsx)(n.code,{children:"gpt-4"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import os\n\nllm_config = {\n    "config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}],\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"It is important to never commit secrets into your code, therefore we read the OpenAI API key from an environment variable."})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"llm_config"})," can then be passed to an agent\u2019s constructor to enable\nit to use the LLM."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import autogen  # noqa: E402\n\nassistant = autogen.AssistantAgent(name="assistant", llm_config=llm_config)\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"introduction-to-config_list",children:["Introduction to ",(0,i.jsx)(n.code,{children:"config_list"})]}),"\n",(0,i.jsxs)(n.p,{children:["Different tasks may require different models, and the ",(0,i.jsx)(n.code,{children:"config_list"}),"\nallows specifying the different endpoints and configurations that are to\nbe used. It is a list of dictionaries, each of which contains the\nfollowing keys depending on the kind of endpoint being used:"]}),"\n","\n","\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(r.Z,{value:"openai",label:"OpenAI",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model"})," (str, required): The identifier of the model to be used, such as 'gpt-4', 'gpt-3.5-turbo'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_key"})," (str, optional): The API key required for authenticating requests to the model's API endpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"base_url"})," (str, optional): The base URL of the API endpoint. This is the root address where API calls are directed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tags"})," (List[str], optional): Tags which can be used for filtering."]}),"\n"]}),(0,i.jsx)(n.p,{children:"Example:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "model": "gpt-4",\n    "api_key": os.environ[\'OPENAI_API_KEY\']\n  }\n]\n'})})]}),(0,i.jsxs)(r.Z,{value:"azureopenai",label:"Azure OpenAI",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model"})," (str, required): The identifier of the model to be used, such as 'gpt-4', 'gpt-3.5-turbo'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_key"})," (str, optional): The API key required for authenticating requests to the model's API endpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_type"}),": ",(0,i.jsx)(n.code,{children:"azure"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"base_url"})," (str, optional): The base URL of the API endpoint. This is the root address where API calls are directed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_version"})," (str, optional): The version of the Azure API you wish to use."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tags"})," (List[str], optional): Tags which can be used for filtering."]}),"\n"]}),(0,i.jsx)(n.p,{children:"Example:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "model": "gpt-4",\n    "api_type": "azure",\n    "api_key": os.environ[\'AZURE_OPENAI_API_KEY\'],\n    "base_url": "https://ENDPOINT.openai.azure.com/",\n    "api_version": "2024-02-15-preview"\n  }\n]\n'})})]}),(0,i.jsxs)(r.Z,{value:"other",label:"Other OpenAI compatible",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model"})," (str, required): The identifier of the model to be used, such as 'llama-7B'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_key"})," (str, optional): The API key required for authenticating requests to the model's API endpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"base_url"})," (str, optional): The base URL of the API endpoint. This is the root address where API calls are directed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tags"})," (List[str], optional): Tags which can be used for filtering."]}),"\n"]}),(0,i.jsx)(n.p,{children:"Example:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "model": "llama-7B",\n    "base_url": "http://localhost:1234"\n  }\n]\n'})})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["By default this will create a model client which assumes an OpenAI API (or compatible) endpoint. To use custom model clients, see ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_custom_model.ipynb",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.h3,{id:"oai_config_list-pattern",children:[(0,i.jsx)(n.code,{children:"OAI_CONFIG_LIST"})," pattern"]}),"\n",(0,i.jsxs)(n.p,{children:["A common, useful pattern used is to define this ",(0,i.jsx)(n.code,{children:"config_list"})," is via\nJSON (specified as a file or an environment variable set to a\nJSON-formatted string) and then use the\n",(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_json",children:(0,i.jsx)(n.code,{children:"config_list_from_json"})}),"\nhelper function to load it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'config_list = autogen.config_list_from_json(\n    env_or_file="OAI_CONFIG_LIST",\n)\n\n# Then, create the assistant agent with the config list\nassistant = autogen.AssistantAgent(name="assistant", llm_config={"config_list": config_list})\n'})}),"\n",(0,i.jsx)(n.p,{children:"This can be helpful as it keeps all the configuration in one place\nacross different projects or notebooks."}),"\n",(0,i.jsxs)(n.p,{children:["This function interprets the ",(0,i.jsx)(n.code,{children:"env_or_file"})," argument as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"env_or_file"})," is an environment variable then:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It will first try to load the file from the path specified in\nthe environment variable."}),"\n",(0,i.jsx)(n.li,{children:"If there is no file, it will try to interpret the environment\nvariable as a JSON string."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Otherwise, it will try to open the file at the path specified by\n",(0,i.jsx)(n.code,{children:"env_or_file"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"why-is-it-a-list",children:"Why is it a list?"}),"\n",(0,i.jsx)(n.p,{children:"Being a list allows you to define multiple models that can be used by\nthe agent. This is useful for a few reasons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If one model times out or fails, the agent can try another model."}),"\n",(0,i.jsxs)(n.li,{children:["Having a single global list of models and ",(0,i.jsx)(n.a,{href:"#config-list-filtering",children:"filtering\nit"})," based on certain keys (e.g.\xa0name, tag)\nin order to pass select models into a certain agent (e.g.\xa0use\ncheaper GPT 3.5 for agents solving easier tasks)"]}),"\n",(0,i.jsxs)(n.li,{children:["While the core agents, (e.g.\xa0conversable or assistant) do not have\nspecial logic around selecting configs, some of the specialized\nagents ",(0,i.jsx)(n.em,{children:"may"})," have logic to select the best model based on the task\nat hand."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-does-an-agent-decide-which-model-to-pick-out-of-the-list",children:"How does an agent decide which model to pick out of the list?"}),"\n",(0,i.jsx)(n.p,{children:"An agent uses the very first model available in the \u201cconfig_list\u201d and\nmakes LLM calls against this model. If the model fail (e.g.\xa0API\nthrottling) the agent will retry the request against the 2nd model and\nso on until prompt completion is received (or throws an error if none of\nthe models successfully completes the request). In general there\u2019s no\nimplicit/hidden logic inside agents that is used to pick \u201cthe best model\nfor the task\u201d. However, some specialized agents may attempt to choose\n\u201cthe best model for the task\u201d. It is developers responsibility to pick\nthe right models and use them with agents."}),"\n",(0,i.jsx)(n.h3,{id:"config-list-filtering",children:"Config list filtering"}),"\n",(0,i.jsx)(n.p,{children:"As described above the list can be filtered based on certain criteria.\nThis is defined as a dictionary of key to filter on and value to filter\nby. For example, if you have a list of configs and you want to select\nthe one with the model \u201cgpt-3.5-turbo\u201d you can use the following filter:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'filter_dict = {"model": "gpt-3.5-turbo"}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This can then be applied to a config list loaded in Python with\n",(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#filter_config",children:(0,i.jsx)(n.code,{children:"filter_config"})}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"config_list = autogen.filter_config(config_list, filter_dict)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Or, directly when loading the config list using\n",(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_json",children:(0,i.jsx)(n.code,{children:"config_list_from_json"})}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'config_list = autogen.config_list_from_json(env_or_file="OAI_CONFIG_LIST", filter_dict=filter_dict)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"tags",children:"Tags"}),"\n",(0,i.jsxs)(n.p,{children:["Model names can differ between OpenAI and Azure OpenAI, so tags offer an\neasy way to smooth over this inconsistency. Tags are a list of strings\nin the ",(0,i.jsx)(n.code,{children:"config_list"}),", for example for the following ",(0,i.jsx)(n.code,{children:"config_list"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'config_list = [\n    {"model": "gpt-4", "api_key": "", "tags": ["gpt4", "openai"]},\n    {"model": "llama-7B", "base_url": "http://127.0.0.1:8080", "tags": ["llama", "local"]},\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then when filtering the ",(0,i.jsx)(n.code,{children:"config_list"})," you can can specify the desired\ntags. A config is selected if it has at least one of the tags specified\nin the filter. For example, to just get the ",(0,i.jsx)(n.code,{children:"llama"})," model, you can use\nthe following filter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'filter_dict = {"tags": ["llama", "another_tag"]}\nconfig_list = autogen.filter_config(config_list, filter_dict)\nassert len(config_list) == 1\n'})}),"\n",(0,i.jsx)(n.h2,{id:"other-configuration-parameters",children:"Other configuration parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Besides the ",(0,i.jsx)(n.code,{children:"config_list"}),", there are other parameters that can be used\nto configure the LLM. These are split between parameters specifically\nused by Autogen and those passed into the model client."]}),"\n",(0,i.jsx)(n.h3,{id:"autogen-specific-parameters",children:"AutoGen specific parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cache_seed"})," - This is a legacy parameter and not recommended to be\nused unless the reason for using it is to disable the default\ncaching behavior. To disable default caching, set this to ",(0,i.jsx)(n.code,{children:"None"}),".\nOtherwise, by default or if an int is passed the\n",(0,i.jsx)(n.a,{href:"../../docs/reference/cache/disk_cache",children:"DiskCache"})," will be used. For\nthe new way of using caching, pass a\n",(0,i.jsx)(n.a,{href:"../../docs/reference/cache/",children:"Cache"})," object into\n",(0,i.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#initiate_chat",children:(0,i.jsx)(n.code,{children:"initiate_chat"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"extra-model-client-parameters",children:"Extra model client parameters"}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to passthrough parameters through to the OpenAI\nclient. Parameters that correspond to the ",(0,i.jsxs)(n.a,{href:"https://github.com/openai/openai-python/blob/d231d1fa783967c1d3a1db3ba1b52647fff148ac/src/openai/_client.py#L67",children:[(0,i.jsx)(n.code,{children:"OpenAI"}),"\nclient"]}),"\nor the ",(0,i.jsxs)(n.a,{href:"https://github.com/openai/openai-python/blob/d231d1fa783967c1d3a1db3ba1b52647fff148ac/src/openai/resources/completions.py#L35",children:[(0,i.jsx)(n.code,{children:"OpenAI"})," completions create\nAPI"]}),"\ncan be supplied."]}),"\n",(0,i.jsxs)(n.p,{children:["This is commonly used for things like ",(0,i.jsx)(n.code,{children:"temperature"}),", or ",(0,i.jsx)(n.code,{children:"timeout"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'llm_config = {\n    "config_list": [\n        {\n            "model": "gpt-4",\n            "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n            "api_type": "azure",\n            "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n            "api_version": "2024-02-15-preview",\n        },\n        {\n            "model": "llama-7B",\n            "base_url": "http://127.0.0.1:8080",\n            "api_type": "openai",\n        },\n    ],\n    "temperature": 0.9,\n    "timeout": 300,\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"other-helpers-for-loading-a-config-list",children:"Other helpers for loading a config list"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#get_config_list",children:(0,i.jsx)(n.code,{children:"get_config_list"})}),":\nGenerates configurations for API calls, primarily from provided API\nkeys."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_openai_aoai",children:(0,i.jsx)(n.code,{children:"config_list_openai_aoai"})}),":\nConstructs a list of configurations using both Azure OpenAI and\nOpenAI endpoints, sourcing API keys from environment variables or\nlocal files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_models",children:(0,i.jsx)(n.code,{children:"config_list_from_models"})}),":\nCreates configurations based on a provided list of models, useful\nwhen targeting specific models without manually specifying each\nconfiguration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_dotenv",children:(0,i.jsx)(n.code,{children:"config_list_from_dotenv"})}),":\nConstructs a configuration list from a ",(0,i.jsx)(n.code,{children:".env"})," file, offering a\nconsolidated way to manage multiple API configurations and keys from\na single file."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/config_loader_utility_functions.ipynb",children:"this\nnotebook"}),"\nfor examples of using the above functions."]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var i=t(6905);const s={tabItem:"tabItem_Ymn6"};var o=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(7294),s=t(6905),o=t(2466),r=t(6550),a=t(469),l=t(1980),c=t(7392),d=t(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=u(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[c,h]=p({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),x=(()=>{const e=c??g;return f({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,o]),tabValues:o}}var m=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function j(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==i&&(c(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(_,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);