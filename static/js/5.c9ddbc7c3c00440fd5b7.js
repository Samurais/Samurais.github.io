webpackJsonp([5,37],{312:function(t,n){t.exports={rawContent:'\n标准库**std::regex**还没有完全支持，在g++ 4.8.x 中，不能使用。所以，推荐使用boost库，取得更好的兼容性。\n\nBUILD\n```\ndeps=[\'//Common/ThirdParty/boost:boost_regex\',\n        ...]\n```\n\nSrc\n```\n#include "Common/ThirdParty/boost/regex.hpp"\n\nvoid regexSearch(const std::string& pattern, const std::string& input, std::vector<std::string>& results)\n{ \n    VLOG(3) << "regex_search_azAZ09 input " << input;\n\n    // boost::regex rgx("([a-zA-Z0-9]+)");\n    boost::regex rgx(pattern);\n    string::const_iterator start, end;\n    start=input.begin();\n    end=input.end();\n    boost::match_results<string::const_iterator> what;\n    boost::match_flag_type flags=boost::match_default;\n\n    while (boost::regex_search(start, end, what, rgx, flags))\n    {\n        string s(what[0].first, what[0].second);\n        VLOG(3) << "regex_search match: " << s;\n        results.push_back(s);\n        start = what[0].second;\n    }\n}\n```\n\n\n## 参考\n[性能比较](http://www.boost.org/doc/libs/1_61_0/libs/xpressive/doc/html/boost_xpressive/appendices/perf/perf_msvc.html)\n\n',metaData:{layout:"post",title:"C++ 正则表达式用法",excerpt:"正则表达式作为自然语言处理的最基本的操作，给出C++的使用方案。",category:"development",tags:["program"],disqus:!0}}}});