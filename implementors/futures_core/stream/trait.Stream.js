(function() {var implementors = {};
implementors["axum"] = [{"text":"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"axum/extract/struct.BodyStream.html\" title=\"struct axum::extract::BodyStream\">BodyStream</a>","synthetic":false,"types":["axum::extract::request_parts::BodyStream"]}];
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Receiver.html\" title=\"struct futures_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedReceiver.html\" title=\"struct futures_channel::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::UnboundedReceiver"]}];
implementors["futures_core"] = [];
implementors["hyper"] = [{"text":"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/body/struct.Body.html\" title=\"struct hyper::body::Body\">Body</a>","synthetic":false,"types":["hyper::body::body::Body"]}];
implementors["tokio_stream"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.ReceiverStream.html\" title=\"struct tokio_stream::wrappers::ReceiverStream\">ReceiverStream</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::wrappers::mpsc_bounded::ReceiverStream"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.UnboundedReceiverStream.html\" title=\"struct tokio_stream::wrappers::UnboundedReceiverStream\">UnboundedReceiverStream</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::wrappers::mpsc_unbounded::UnboundedReceiverStream"]},{"text":"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/wrappers/struct.IntervalStream.html\" title=\"struct tokio_stream::wrappers::IntervalStream\">IntervalStream</a>","synthetic":false,"types":["tokio_stream::wrappers::interval::IntervalStream"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/struct.Timeout.html\" title=\"struct tokio_stream::Timeout\">Timeout</a>&lt;S&gt;","synthetic":false,"types":["tokio_stream::stream_ext::timeout::Timeout"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/struct.Empty.html\" title=\"struct tokio_stream::Empty\">Empty</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::empty::Empty"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/struct.Iter.html\" title=\"struct tokio_stream::Iter\">Iter</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,&nbsp;</span>","synthetic":false,"types":["tokio_stream::iter::Iter"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/struct.Once.html\" title=\"struct tokio_stream::Once\">Once</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::once::Once"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/struct.Pending.html\" title=\"struct tokio_stream::Pending\">Pending</a>&lt;T&gt;","synthetic":false,"types":["tokio_stream::pending::Pending"]},{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_stream/struct.StreamMap.html\" title=\"struct tokio_stream::StreamMap\">StreamMap</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_stream::stream_map::StreamMap"]}];
implementors["tokio_util"] = [{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_util/codec/struct.Framed.html\" title=\"struct tokio_util::codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"tokio_util/codec/trait.Decoder.html\" title=\"trait tokio_util::codec::Decoder\">Decoder</a>,&nbsp;</span>","synthetic":false,"types":["tokio_util::codec::framed::Framed"]},{"text":"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_util/codec/struct.FramedRead.html\" title=\"struct tokio_util::codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tokio_util/codec/trait.Decoder.html\" title=\"trait tokio_util::codec::Decoder\">Decoder</a>,&nbsp;</span>","synthetic":false,"types":["tokio_util::codec::framed_read::FramedRead"]},{"text":"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_util/codec/struct.FramedWrite.html\" title=\"struct tokio_util::codec::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["tokio_util::codec::framed_write::FramedWrite"]},{"text":"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_util/sync/struct.PollSemaphore.html\" title=\"struct tokio_util::sync::PollSemaphore\">PollSemaphore</a>","synthetic":false,"types":["tokio_util::sync::poll_semaphore::PollSemaphore"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"enum\" href=\"tokio_util/either/enum.Either.html\" title=\"enum tokio_util::either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = L::<a class=\"type\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>&gt;,&nbsp;</span>","synthetic":false,"types":["tokio_util::either::Either"]}];
implementors["tonic"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tonic/codec/struct.Streaming.html\" title=\"struct tonic::codec::Streaming\">Streaming</a>&lt;T&gt;","synthetic":false,"types":["tonic::codec::decode::Streaming"]},{"text":"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tonic/transport/server/struct.TcpIncoming.html\" title=\"struct tonic::transport::server::TcpIncoming\">TcpIncoming</a>","synthetic":false,"types":["tonic::transport::server::incoming::TcpIncoming"]}];
implementors["tower"] = [{"text":"impl&lt;MS, Target, Request&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/balance/pool/struct.PoolDiscoverer.html\" title=\"struct tower::balance::pool::PoolDiscoverer\">PoolDiscoverer</a>&lt;MS, Target, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MS: <a class=\"trait\" href=\"tower/make/trait.MakeService.html\" title=\"trait tower::make::MakeService\">MakeService</a>&lt;Target, Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;MS::<a class=\"type\" href=\"tower/make/trait.MakeService.html#associatedtype.MakeError\" title=\"type tower::make::MakeService::MakeError\">MakeError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"tower/type.BoxError.html\" title=\"type tower::BoxError\">BoxError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;MS::<a class=\"type\" href=\"tower/make/trait.MakeService.html#associatedtype.Error\" title=\"type tower::make::MakeService::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"tower/type.BoxError.html\" title=\"type tower::BoxError\">BoxError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::balance::pool::PoolDiscoverer"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/discover/struct.ServiceList.html\" title=\"struct tower::discover::ServiceList\">ServiceList</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = U&gt;,&nbsp;</span>","synthetic":false,"types":["tower::discover::list::ServiceList"]},{"text":"impl&lt;D:&nbsp;<a class=\"trait\" href=\"tower/discover/trait.Discover.html\" title=\"trait tower::discover::Discover\">Discover</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>, M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/load/struct.Constant.html\" title=\"struct tower::load::Constant\">Constant</a>&lt;D, M&gt;","synthetic":false,"types":["tower::load::constant::Constant"]},{"text":"impl&lt;D, C&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/load/peak_ewma/struct.PeakEwmaDiscover.html\" title=\"struct tower::load::peak_ewma::PeakEwmaDiscover\">PeakEwmaDiscover</a>&lt;D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tower/discover/trait.Discover.html\" title=\"trait tower::discover::Discover\">Discover</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::load::peak_ewma::PeakEwmaDiscover"]},{"text":"impl&lt;D, C&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/load/pending_requests/struct.PendingRequestsDiscover.html\" title=\"struct tower::load::pending_requests::PendingRequestsDiscover\">PendingRequestsDiscover</a>&lt;D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tower/discover/trait.Discover.html\" title=\"trait tower::discover::Discover\">Discover</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::load::pending_requests::PendingRequestsDiscover"]},{"text":"impl&lt;Svc, S&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/util/struct.CallAll.html\" title=\"struct tower::util::CallAll\">CallAll</a>&lt;Svc, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Svc: <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;S::<a class=\"type\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Svc::<a class=\"type\" href=\"tower/trait.Service.html#associatedtype.Error\" title=\"type tower::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"tower/type.BoxError.html\" title=\"type tower::BoxError\">BoxError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::call_all::ordered::CallAll"]},{"text":"impl&lt;Svc, S&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tower/util/struct.CallAllUnordered.html\" title=\"struct tower::util::CallAllUnordered\">CallAllUnordered</a>&lt;Svc, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Svc: <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;S::<a class=\"type\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Svc::<a class=\"type\" href=\"tower/trait.Service.html#associatedtype.Error\" title=\"type tower::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"tower/type.BoxError.html\" title=\"type tower::BoxError\">BoxError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::call_all::unordered::CallAllUnordered"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()